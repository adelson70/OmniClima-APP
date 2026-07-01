import { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import {
  ArrowLeftIcon,
  EyeClosedIcon,
  EyeIcon,
} from "phosphor-react-native";

import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@/components/ui/input";
import { Text } from "@/components/ui/text";

export default function ForgetPassword() {
  const { resetPassword } = useLocalSearchParams<{ resetPassword?: string }>();

  const hasResetPassword = !!resetPassword;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View className="flex-1 bg-background-0 px-6">
      {/* Voltar */}
      <Button
        variant="link"
        onPress={() => router.back()}
        className="absolute top-16 left-4 z-10"
      >
        <ButtonIcon as={ArrowLeftIcon} />
        <ButtonText>Voltar</ButtonText>
      </Button>

      <View className="flex-1 justify-center">
        {/* ENVIAR LINK DE RECUPERAÇÃO */}
        {!hasResetPassword ? (
          <>
            <Text className="text-3xl font-bold mb-2">
              Esqueceu sua senha?
            </Text>

            <Text className="text-typography-500 mb-8">
              Informe seu e-mail para receber um link de recuperação.
            </Text>

            <Input className="mb-8">
              <InputField
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </Input>

            {/* TODO: MUDAR PARA API */}
            <Button size="lg" onPress={()=> {router.push({pathname: "/forget-password", params: {resetPassword: "123"}})}}>
              <ButtonText>Enviar link de recuperação</ButtonText>
            </Button>
          </>
        ) : (
          // REDEFINIR SENHA
          <>
            <Text className="text-3xl font-bold mb-2">
              Redefinir senha
            </Text>

            <Text className="text-typography-500 mb-8">
              Seu link de recuperação é válido. Informe sua nova senha.
            </Text>

            <Input className="mb-4">
              <InputField
                placeholder="Nova senha"
                secureTextEntry={!showPassword}
              />

              <InputSlot
                className="mr-3"
                onPress={() => setShowPassword(!showPassword)}
              >
                <InputIcon
                  as={showPassword ? EyeIcon : EyeClosedIcon}
                  className="w-6 h-6"
                />
              </InputSlot>
            </Input>

            <Input className="mb-8">
              <InputField
                placeholder="Confirmar nova senha"
                secureTextEntry={!showConfirmPassword}
              />

              <InputSlot
                className="mr-3"
                onPress={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                <InputIcon
                  as={
                    showConfirmPassword
                      ? EyeIcon
                      : EyeClosedIcon
                  }
                  className="w-6 h-6"
                />
              </InputSlot>
            </Input>

            <Button size="lg">
              <ButtonText>Redefinir senha</ButtonText>
            </Button>
          </>
        )}
      </View>
    </View>
  );
}