import { router } from "expo-router";
import { View } from "react-native";

import { ArrowLeftIcon } from "phosphor-react-native";

import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

export default function Auth() {
  const handleBack = () => {
    router.replace("/home");
  };

  return (
    <View className="flex-1 bg-background-0 px-6">
      {/* Voltar */}
      <Button
        onPress={handleBack}
        variant="link"
        className="absolute top-16 left-2 z-10"
      >
        <ButtonIcon as={ArrowLeftIcon} />
        <ButtonText>Voltar</ButtonText>
      </Button>

      {/* Conteúdo */}
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold mb-2">
          Entrar na sua conta
        </Text>

        <Text className="text-typography-500 mb-8">
          Salve suas locailizações e sensores
        </Text>

        {/* Email */}
        <Input className="mb-4">
          <InputField
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Input>

        {/* Senha */}
        <Input className="mb-2">
          <InputField
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </Input>

        {/* Esqueceu senha */}
        <Button
          variant="link"
          action="primary"
          className="self-end mb-6"
        >
          <ButtonText>Esqueceu sua senha?</ButtonText>
        </Button>

        {/* Entrar */}
        <Button size="lg">
          <ButtonText>Entrar</ButtonText>
        </Button>

        {/* Divisor */}
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-px bg-outline-200" />

          <Text className="mx-4 text-typography-500">
            ou
          </Text>

          <View className="flex-1 h-px bg-outline-200" />
        </View>

        {/* Criar conta */}
        <View className="flex-row justify-center items-center">
          <Text className="text-typography-500">
            Não possui uma conta?
          </Text>

          <Button variant="link" className="ml-1">
            <ButtonText>Criar conta</ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
}