import { View } from 'react-native';

import { BackButton } from '@/components/BackButton';

export function NewHabit() {
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <BackButton />
    </View>
  );
}
