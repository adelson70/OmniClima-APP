import { ScrollView } from "react-native";
import { router } from "expo-router";
import { ArrowLeftIcon } from "phosphor-react-native";

import { Box } from "@/components/ui/box";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function SensorDocs() {
  return (
    <ScrollView
      className="flex-1 bg-background-0 px-6 pt-16"
      showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-24"
    >

      <Text className="text-3xl font-bold mb-8">
        Como usar o sensor
      </Text>

      <Text className="text-typography-500 mb-3">
        1. Crie um sensor no aplicativo.
      </Text>

      <Text className="text-typography-500 mb-3">
        2. Copie o token gerado após a criação.
      </Text>

      <Text className="text-typography-500 mb-3">
        3. Configure seu dispositivo para enviar dados para a API.
      </Text>

      <Text className="text-typography-500 mb-6">
        4. Envie os dados para o endpoint do sensor.
      </Text>

      {/* Headers */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-3">
          Headers
        </Text>

        <Text className="font-mono text-xs">
          Content-Type: application/json
        </Text>

        <Text className="font-mono text-xs mt-2">
          x-sensor-token: omni_xxxxxxxxxxxxxxxxx
        </Text>
      </Box>

      {/* Endpoint */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-3">
          Endpoint
        </Text>

        <Text className="font-mono text-xs">
          POST /webhook/:sensorId
        </Text>

        <Text className="text-typography-500 mt-3">
          O ID do sensor deve ser enviado na URL.
        </Text>
      </Box>

      {/* Exemplo Arduino */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-3">
          Exemplo ESP32 / Arduino
        </Text>

        <Text className="font-mono text-xs">
{`http.addHeader(
  "Content-Type",
  "application/json"
);

http.addHeader(
  "x-sensor-token",
  "omni_xxxxxxxxxxxxxxxxx"
);

const char* serverUrl =
"${process.env.EXPO_PUBLIC_API_URL}/webhook/SENSOR_ID";`}
        </Text>
      </Box>

      {/* Body */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-3">
          Exemplo de Body
        </Text>

        <Text className="font-mono text-xs">
{`{
  "temp": 28.78,
  "umid": 58.78,
  "rain": true
}`}
        </Text>
      </Box>

      {/* Campos */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-3">
          Campos suportados
        </Text>

        <Text className="text-typography-500 mb-2">
          temp (float)
        </Text>

        <Text className="text-typography-500 mb-2">
          umid (float)
        </Text>

        <Text className="text-typography-500">
          rain (boolean)
        </Text>
      </Box>

      {/* Regras */}
      <Box className="bg-background-50 rounded-2xl p-4 mb-8">
        <Text className="font-semibold mb-3">
          Regras
        </Text>

        <Text className="text-typography-500 mb-2">
          • Todos os campos são opcionais.
        </Text>

        <Text className="text-typography-500 mb-2">
          • É obrigatório enviar pelo menos um campo.
        </Text>

        <Text className="text-typography-500 mb-2">
          • O token deve ser enviado no header x-sensor-token.
        </Text>

        <Text className="text-typography-500">
          • Limite de 2 requisições por hora por sensor.
        </Text>
      </Box>

      <Button onPress={() => router.back()}>
        <ButtonText>Entendi</ButtonText>
      </Button>
    </ScrollView>
  );
}