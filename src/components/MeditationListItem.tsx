import { Meditation } from "@/types";
import { Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function MeditationListItem({ meditation }: { meditation: Meditation }) {
  return (
    <View className="flex-row items-center gap-5">
      <View className="bg-green-700 p-2 rounded-full">
        <FontAwesome name="check" size={16} color="white" />
      </View>
      <View className="flex-1 p-5 py-8 border-2 rounded-2xl border-gray-200">
        <Text className="font-semibold text-2xl mb-2">{meditation.title}</Text>
        <View></View>
        <View className="flex-row items-center gap-1">
          <FontAwesome6 name="clock" size={16} color="#687280" />
          <Text className="text-gray-400">{meditation.duration} min</Text>
        </View>
      </View>
    </View>
  );
}
