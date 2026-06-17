import { View, ScrollView } from "react-native";

import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

export default function Home() {
  return (
    <ScrollView
      className="flex-1 bg-background-0 px-6 pt-16"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {/* Cidade */}
      <View className="items-center mb-8">
        <Text className="text-3xl font-bold text-typography-900">
          Criciúma
        </Text>

        <Text className="text-typography-500">
          Santa Catarina • Brasil
        </Text>
      </View>

      {/* Clima atual */}
      <Box className="rounded-3xl bg-primary-50 p-6 items-center mb-6">
        {/* ícone */}
        <View className="w-24 h-24 rounded-full bg-primary-100 mb-4" />

        {/* temperatura */}
        <Text className="text-6xl font-bold text-typography-900">
          22°
        </Text>

        <Text className="text-typography-500 mt-2">
          Parcialmente nublado
        </Text>
      </Box>

      {/* Previsão por hora */}
      <Box className="rounded-2xl bg-background-50 p-4 mb-6">
        <Text className="text-lg font-semibold mb-4">
          Previsão por hora
        </Text>

        {/* gráfico placeholder */}
        <View className="h-32 rounded-xl bg-primary-50" />
      </Box>

      {/* Próximos dias */}
      <Box className="rounded-2xl bg-background-50 p-4 mb-6">
        <Text className="text-lg font-semibold mb-4">
          Próximos dias
        </Text>

        <View className="gap-3">
          <View className="h-14 rounded-xl bg-primary-50" />
          <View className="h-14 rounded-xl bg-primary-50" />
          <View className="h-14 rounded-xl bg-primary-50" />
          <View className="h-14 rounded-xl bg-primary-50" />
          <View className="h-14 rounded-xl bg-primary-50" />
        </View>
      </Box>

      {/* Nascer e pôr do sol */}
      <Box className="rounded-2xl bg-background-50 p-4">
        <Text className="text-lg font-semibold mb-4">
          Nascer e pôr do sol
        </Text>

        {/* gráfico arco placeholder */}
        <View className="h-40 rounded-xl bg-warning-50" />
      </Box>
        <View className="pb-24" />
    </ScrollView>
  );
}