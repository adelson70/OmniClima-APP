import { Redirect, router } from "expo-router";
import { View } from "react-native";

import { ArrowLeftIcon, EyeClosedIcon, EyeIcon } from "phosphor-react-native";

import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { useAuthStore } from "@/src/store/useAuthStore";

type FormData = {
  email: string;
  password: string;
};

export default function Create() {
  const { setAuthData, user } = useAuthStore()
  const [form, setForm] = useState({
    email:"",
    password: ""
  })

  const [showPass, setShowPass] = useState(false)

  const handleForm = (field: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <View className="flex-1 bg-background-0 px-6">
      {/* Conteúdo */}
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold mb-2">
          Criar sua conta
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
            onChangeText={(value) => {handleForm("email",value)}}
          />
        </Input>

        {/* Senha */}
        <Input className="mb-2">
          <InputField
            placeholder="Digite sua senha"
            secureTextEntry={!showPass}
            onChangeText={(value) => {handleForm("password",value)}}
          />
          <InputSlot onPress={() => {setShowPass(!showPass)}} className="mr-3">
            <InputIcon as={showPass ? EyeIcon : EyeClosedIcon} className="w-6 h-6" />
          </InputSlot>
        </Input>

        {/* Entrar */}
        <Button size="lg" onPress={()=> {}}>
          <ButtonText>Criar Conta</ButtonText>
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
            Já possui uma conta?
          </Text>

          <Button variant="link" className="ml-1" onPress={()=> {router.replace("/login")}}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
}