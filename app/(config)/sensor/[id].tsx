import { View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/components/ui/button";

import {
  ArrowLeftIcon,
  PencilSimpleIcon,
} from "phosphor-react-native";

export default function SensorDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-background-0">
      {/* Voltar */}
      <Button
        onPress={() => router.back()}
        variant="link"
        className="absolute top-16 left-4 z-50"
      >
        <ButtonIcon as={ArrowLeftIcon} />
        <ButtonText>Voltar</ButtonText>
      </Button>

      <View className="flex-1 px-6 pt-32">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold">
            Sensor Quintal
          </Text>

          <Text className="text-typography-500">
            ID: {id}
          </Text>
        </View>

        {/* Temperatura */}
        <Box className="bg-primary-50 rounded-3xl p-6 mb-6 items-center">
          <Text className="text-6xl font-bold">
            24°C
          </Text>

          <Text className="text-typography-500 mt-2">
            Temperatura Atual
          </Text>
        </Box>

        {/* Informações */}
        <Box className="rounded-2xl bg-background-50 p-4 mb-4">
          <Text className="font-semibold mb-1">
            Latitude
          </Text>

          <Text className="text-typography-500">
            -28.6771
          </Text>
        </Box>

        <Box className="rounded-2xl bg-background-50 p-4 mb-4">
          <Text className="font-semibold mb-1">
            Longitude
          </Text>

          <Text className="text-typography-500">
            -49.3698
          </Text>
        </Box>

        <Box className="rounded-2xl bg-background-50 p-4 mb-4">
          <Text className="font-semibold mb-1">
            Cidade
          </Text>

          <Text className="text-typography-500">
            Criciúma
          </Text>
        </Box>

        <Box className="rounded-2xl bg-background-50 p-4 mb-4">
          <Text className="font-semibold mb-1">
            Estado
          </Text>

          <Text className="text-typography-500">
            Santa Catarina
          </Text>
        </Box>

        <Box className="rounded-2xl bg-background-50 p-4 mb-8">
          <Text className="font-semibold mb-1">
            País
          </Text>

          <Text className="text-typography-500">
            Brasil
          </Text>
        </Box>

        {/* Ações */}
        <Button
          className="mb-3"
          onPress={() => router.push(`/sensor/edit/${id}`)}
        >
          <ButtonIcon as={PencilSimpleIcon} />
          <ButtonText>Editar Sensor</ButtonText>
        </Button>

        <Button action="negative" variant="outline">
          <ButtonText>Excluir Sensor</ButtonText>
        </Button>
      </View>
    </View>
  );
}