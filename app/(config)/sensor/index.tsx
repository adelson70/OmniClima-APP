import { View, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";

import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/components/ui/button";

import {
  ArrowLeftIcon,
  PlusIcon,
} from "phosphor-react-native";

export default function Sensors() {
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

      {/* Conteúdo */}
      <View className="flex-1 px-6 pt-36">
        {/* Busca + Adicionar */}
        <View className="flex-row gap-3 mb-6">
          <View className="flex-1">
            <Input>
              <InputField placeholder="Pesquisar sensor..." />
            </Input>
          </View>

          <Button className="w-12 h-12 rounded-xl">
            <ButtonIcon as={PlusIcon} />
          </Button>
        </View>

        {/* Apenas a lista possui scroll */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
        >
          {/* Sensor 1 */}
          <Pressable onPress={()=> {router.push("/sensor/1")}}>
            <Box className="bg-primary-50 rounded-2xl p-4 mb-4">
              <Text className="text-lg font-bold text-typography-900">
                Sensor Quintal
              </Text>

              <Text className="text-typography-500 mt-1">
                -28.6771, -49.3698
              </Text>

              <Text className="text-typography-500">
                Criciúma • SC • Brasil
              </Text>

              <Text className="text-2xl font-bold mt-3">
                24°C
              </Text>
            </Box>

          </Pressable>

          {/* Sensor 2 */}
          <Box className="bg-background-50 rounded-2xl p-4 mb-4">
            <Text className="text-lg font-bold text-typography-900">
              Sensor Estufa
            </Text>

            <Text className="text-typography-500 mt-1">
              -28.6720, -49.3510
            </Text>

            <Text className="text-typography-500">
              Criciúma • SC • Brasil
            </Text>

            <Text className="text-2xl font-bold mt-3">
              31°C
            </Text>
          </Box>

          {/* Sensor 3 */}
          <Box className="bg-background-50 rounded-2xl p-4 mb-4">
            <Text className="text-lg font-bold text-typography-900">
              Sensor Fazenda
            </Text>

            <Text className="text-typography-500 mt-1">
              -27.8150, -50.3250
            </Text>

            <Text className="text-typography-500">
              Lages • SC • Brasil
            </Text>

            <Text className="text-2xl font-bold mt-3">
              19°C
            </Text>
          </Box>

          {/* Sensor 4 */}
          <Box className="bg-background-50 rounded-2xl p-4 mb-4">
            <Text className="text-lg font-bold text-typography-900">
              Sensor Galpão
            </Text>

            <Text className="text-typography-500 mt-1">
              -29.6842, -53.8069
            </Text>

            <Text className="text-typography-500">
              Santa Maria • RS • Brasil
            </Text>

            <Text className="text-2xl font-bold mt-3">
              27°C
            </Text>
          </Box>

          {/* Sensor 5 */}
          <Box className="bg-background-50 rounded-2xl p-4 mb-4">
            <Text className="text-lg font-bold text-typography-900">
              Sensor Telhado
            </Text>

            <Text className="text-typography-500 mt-1">
              -23.5505, -46.6333
            </Text>

            <Text className="text-typography-500">
              São Paulo • SP • Brasil
            </Text>

            <Text className="text-2xl font-bold mt-3">
              26°C
            </Text>
          </Box>

          {/* Sensor 6 */}
          <Box className="bg-background-50 rounded-2xl p-4 mb-4">
            <Text className="text-lg font-bold text-typography-900">
              Sensor Jardim
            </Text>

            <Text className="text-typography-500 mt-1">
              -25.4284, -49.2733
            </Text>

            <Text className="text-typography-500">
              Curitiba • PR • Brasil
            </Text>

            <Text className="text-2xl font-bold mt-3">
              18°C
            </Text>
          </Box>
        </ScrollView>
      </View>
    </View>
  );
}