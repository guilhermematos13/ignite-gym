import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { AuthNavigatorRouterProps } from '@routes/auth.routes';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormSignInProps = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha')
})

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRouterProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormSignInProps>({
    resolver: yupResolver(signInSchema)
  });

  function handleSignIn(data: FormSignInProps) {
    console.log(data)
  }

  function handleNewAccount() {
    navigation.navigate('signUp');
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="body">
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                keyboardType="email-address"
                placeholder="E-mail"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
            name='email'
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}

              />
            )}
            name='password'
          />

          <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            onPress={handleNewAccount}
            title="Criar conta"
            variant="outline"
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
