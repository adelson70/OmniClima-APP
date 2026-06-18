import { View, ScrollView } from "react-native";
import { router } from "expo-router";
import { ArrowLeftIcon } from "phosphor-react-native";

import { Box } from "@/components/ui/box";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/components/ui/button";
import {
  Input,
  InputField,
} from "@/components/ui/input";
import { Text } from "@/components/ui/text";

export default function SensorCreate() {
  return (
    <View className="flex-1 bg-background-0">
      {/* Voltar fixo */}
      <Button
        onPress={() => router.back()}
        variant="link"
        className="absolute top-16 left-4 z-50"
      >
        <ButtonIcon as={ArrowLeftIcon} />
        <ButtonText>Voltar</ButtonText>
      </Button>

      {/* Conteúdo rolável */}
      <ScrollView
        className="flex-1 px-6 pt-32"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-24"
      >
        {/* Nome */}
        <Text className="text-sm text-typography-500 mb-2">
          Nome do Sensor
        </Text>

        <Input className="mb-4">
          <InputField placeholder="Ex: Sensor Quintal" />
        </Input>

        {/* Latitude */}
        <Text className="text-sm text-typography-500 mb-2">
          Latitude (Opcional)
        </Text>

        <Input className="mb-4">
          <InputField placeholder="-28.6771" />
        </Input>

        {/* Longitude */}
        <Text className="text-sm text-typography-500 mb-2">
          Longitude (Opcional)
        </Text>

        <Input className="mb-6">
          <InputField placeholder="-49.3698" />
        </Input>

        {/* Criar */}
        <Button className="mb-6">
          <ButtonText>Criar Sensor</ButtonText>
        </Button>

        {/* Token */}
        <Box className="rounded-2xl bg-primary-50 p-4 mb-4">
          <Text className="font-semibold mb-2">
            Token do Sensor
          </Text>

          <Text className="text-typography-500">
            O token será exibido aqui após a criação.
          </Text>
        </Box>

        {/* Documentação */}
        <Button
          variant="outline"
          onPress={() => router.push("/sensor/docs")}
        >
          <ButtonText>Como usar o sensor</ButtonText>
        </Button>
      </ScrollView>
    </View>
  );
}