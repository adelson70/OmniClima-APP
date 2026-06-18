import { ScrollView, View } from "react-native";

import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { router } from "expo-router";

export default function Search() {
  return (
    <ScrollView 
    className="flex-1 bg-background-0 px-6 pt-16"
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    >
      {/* Título */}
      <Text className="text-3xl font-bold text-typography-900 mb-6">
        Minhas Localizações
      </Text>

      {/* Busca */}
      <View className="flex-row gap-3 mb-8">
        <View className="flex-1">
          <Input>
            <InputField placeholder="Buscar cidade..." />
          </Input>
        </View>

        <Button className="w-12 h-12 rounded-xl" onPress={()=> {router.push("/find");}}>
          <ButtonText>+</ButtonText>
        </Button>
      </View>

      {/* Cidade 1 */}
      <Box className="bg-primary-50 rounded-2xl p-4 mb-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold">
              30°
            </Text>

            <Text className="text-typography-900 font-semibold">
              Criciúma
            </Text>

            <Text className="text-typography-500">
              Agora
            </Text>
          </View>

          <View className="w-16 h-16 rounded-full bg-warning-100" />
        </View>
      </Box>

      {/* Cidade 2 */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold">
              20°
            </Text>

            <Text className="font-semibold">
              São Paulo
            </Text>
          </View>

          <View className="w-16 h-16 rounded-full bg-primary-100" />
        </View>
      </Box>

      {/* Cidade 3 */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold">
              18°
            </Text>

            <Text className="font-semibold">
              Londres
            </Text>
          </View>

          <View className="w-16 h-16 rounded-full bg-info-100" />
        </View>
      </Box>

      {/* Respiro inferior */}
      <View className="h-24" />
    </ScrollView>
  );
}