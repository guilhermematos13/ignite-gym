import { useState } from 'react';
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 33

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ?
            <Skeleton
              width={PHOTO_SIZE}
              height={PHOTO_SIZE}
              rounded={'full'}
              startColor="gray.400"
              endColor="gray.300"
            />
            :
            <UserPhoto
              source={{ uri: 'https://github.com/guilhermematos13.png' }}
              alt="Imagem do usuário"
              size={PHOTO_SIZE}
            />
          }
          <TouchableOpacity>
            <Text color='green.500' fontFamily='heading' fontSize='md' mt={4} mb={8} rounded={'md'} px={4} py={2} borderColor='green.500' borderWidth={1} >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input placeholder='Nome' bg='gray.600' />
          <Input bg='gray.600' value='guilherme@gmail.com' isDisabled />
        </Center>

        <VStack mt={12} px={10} mb={9}>
          <Heading fontSize='md' color='gray.200' mb={2}>Alterar senha</Heading>
          <Input placeholder='Senha antiga' bg='gray.600' secureTextEntry />
          <Input placeholder='Nova senha' bg='gray.600' secureTextEntry />
          <Input placeholder='Confirme nova senha' bg='gray.600' secureTextEntry />
          <Button title='Atualizar' mt={4} />
        </VStack>

      </ScrollView>
    </VStack>
  );
}
