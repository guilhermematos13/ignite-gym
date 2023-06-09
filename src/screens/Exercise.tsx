import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouterProps } from '@routes/app.routes';
import { Box, HStack, Heading, Icon, Image, Text, VStack, ScrollView } from 'native-base';

import { Button } from '@components/Button';

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'


export function Exercise() {
  const navigation = useNavigation<AppNavigatorRouterProps>()

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <VStack flex={1}>

      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name='arrow-left' color='green.500' size={6} />
        </TouchableOpacity>
        <HStack justifyContent='space-between' mt={4} mb={8} alignItems='center'>
          <Heading flexShrink={1} fontFamily='heading' color='gray.100' fontSize='lg'>
            Puxada Frontal
          </Heading>
          <HStack alignItems='center'>
            <BodySvg />
            <Text color='gray.200' ml={1} textTransform='capitalize'>Costas</Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            w='full'
            h={80}
            source={{ uri: 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral.jpg' }}
            alt='Exercicio'
            mb={3}
            resizeMode='cover'
            rounded='lg'
          />
          <Box bg='gray.600' rounded='md' pb={4} px={4}>
            <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color='gray.200' ml={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color='gray.200' ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title='Marcar como realizado' />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
