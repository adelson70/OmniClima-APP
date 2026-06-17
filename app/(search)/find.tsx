import { View } from "react-native";

import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/components/ui/button";

import { ArrowLeftIcon } from "phosphor-react-native";
import { router } from "expo-router";

export default function Find() {
  return (
    <View className="flex-1 bg-background-0 px-6 pt-16">
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
      <View className="flex-1 pt-16">

        {/* Busca */}
        <Input className="mb-6">
          <InputField
            placeholder="Buscar cidade..."
          />
        </Input>

        {/* Mapa */}
        <Box className="flex-1 rounded-3xl bg-primary-50 items-center justify-center">
          <Text className="text-2xl font-semibold text-primary-700">
            Mapa
          </Text>
        </Box>
        <View className="pb-12" />
      </View>
    </View>
  );
}