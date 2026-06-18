import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

import { router } from "expo-router";
import { ArrowLeftIcon } from "phosphor-react-native";
import { View } from "react-native";

export default function User() {
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
        <Box className="rounded-2xl bg-background-50 p-4 mb-4">
          <Text className="text-sm text-typography-500 mb-1">
            Primeiro Nome
          </Text>

          <Text className="text-lg font-semibold">
            Adelson
          </Text>
        </Box>

        <Box className="rounded-2xl bg-background-50 p-4 mb-4">
          <Text className="text-sm text-typography-500 mb-1">
            Último Nome
          </Text>

          <Text className="text-lg font-semibold">
            Bittencourt
          </Text>
        </Box>

        <Box className="rounded-2xl bg-background-50 p-4 mb-4">
          <Text className="text-sm text-typography-500 mb-1">
            E-mail
          </Text>

          <Text className="text-lg font-semibold">
            usuario@email.com
          </Text>
        </Box>

        <Box className="rounded-2xl bg-background-50 p-4">
          <Text className="text-sm text-typography-500 mb-1">
            Senha
          </Text>

          <Text className="text-lg font-semibold">
            ••••••••••••
          </Text>
        </Box>
      </View>
    </View>
  );
}