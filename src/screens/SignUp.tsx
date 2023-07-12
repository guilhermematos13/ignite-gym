import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormDataProps = {
  email: string
  name: string
  password: string
  confirmPassword: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos'),
  confirmPassword: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'A confirmação da senha não confere'),
})

export function SignUp() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleSignUp(data: FormDataProps) {
    console.log(data)
  }

  function handleGoBack() {
    navigation.goBack();
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
            Crie sua conta
          </Heading>
          <Controller
            control={control}

            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
            name='name'
          />

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
            rules={{
              required: 'Informe a senha'
            }}
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

          <Controller
            control={control}
            rules={{
              required: 'Confirme a senha'
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                placeholder="Confirme a senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.confirmPassword?.message}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyLabel='send'
              />
            )}
            name='confirmPassword'
          />

          <Button
            onPress={handleSubmit(handleSignUp)}
            title="Criar e acessar"
          />

        </Center>

        <Button
          onPress={handleGoBack}
          title="Voltar para o login"
          variant="outline"
          mt={24}
        />
      </VStack>
    </ScrollView>
  );
}
