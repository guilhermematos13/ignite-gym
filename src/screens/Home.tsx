import { useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const [groups, setGroups] = useState([
    'costas',
    'ombro',
    'biceps',
    'triceps',
  ]);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remata curvada',
    'Remada unilateral',
    'Levantamento terra',
  ]);
  const [groupSelected, setGroupSelected] = useState('costas');

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={groupSelected === item}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          my={10}
          maxHeight={10}
        />
      </HStack>
      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          keyExtractor={(item) => item}
          data={exercises}
          renderItem={({ item }) => <ExerciseCard exercise={item} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
