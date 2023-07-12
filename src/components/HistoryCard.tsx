import { HStack, Heading, Text, VStack } from 'native-base';

export function HistoryCard() {
  return (
    <HStack
      w="full"
      bg="gray.600"
      px={5}
      py={4}
      alignItems="center"
      justifyContent="space-between"
      rounded="md"
      mb={3}
    >
      <VStack flex={1}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color="gray.200" fontSize="lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md">
        08:56
      </Text>
    </HStack>
  );
}
