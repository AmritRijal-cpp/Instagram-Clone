import { View, Text } from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';


export default function explore() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
          <Text className="text-secondary font-rblack text-lg text-tint-red">
            Custom Tailwind Styles working?
          </Text>
    </SafeAreaView>
  );
}
