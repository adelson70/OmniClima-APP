import { Redirect, router } from "expo-router";
import { View } from "react-native";

import { ArrowLeftIcon, EyeClosedIcon, EyeIcon } from "phosphor-react-native";

import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/src/store/useAuthStore";
import { CustomInput } from "@/src/components/CustomInput";
import { CustomButton } from "@/src/components/CustomButton";

type FormData = {
  email: string;
  password: string;
};

export default function Auth() {
  const { setAuthData, user } = useAuthStore()
  const [form, setForm] = useState({
    email:"",
    password: ""
  })
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidForm, setisValidForm] = useState(false)

  const handleForm = (field: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }
  
  // TODO COLOCAR CORRETO
  const handleLogin = () => {
    console.log("form", form)
    setAuthData(
      "123",
      {
        admin: false,
        email: "bittencourtadelson1@gmail.com",
        fisrtName: "adelson",
        id: "1",
        lastName: "bittencourt junior"
      })
    return router.replace("/settings")

  }
  
  useEffect(()=> {
    if (isValidEmail && form.password.length > 0) {
      setisValidForm(true)
    }
    else {
      setisValidForm(false)
    }
  }, [form])

  return (
    <View className="flex-1 bg-background-0 px-6">
      {/* Voltar */}
      <Button
        onPress={()=> {router.replace("/home")}}
        variant="link"
        className="absolute top-16 left-4 z-10"
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
        <CustomInput
          placeholder="Digite seu email"
          value={form.email}
          mode="email"
          onChangeText={(value) => {handleForm("email",value)}}
          onValidate={(isValid) => {setIsValidEmail(isValid)}}
        />

        {/* Senha */}
        <CustomInput
          placeholder="Digite sua senha"
          value={form.password}
          mode="password"
          onChangeText={(value) => {handleForm("password",value)}}
        />

        {/* Esqueceu senha */}
        <Button
          variant="link"
          action="primary"
          className="self-end mb-6"
          onPress={()=> {router.push("/forget-password")}}
        >
          <ButtonText>Esqueceu sua senha?</ButtonText>
        </Button>

        {/* Entrar */}
        <CustomButton
         action="primary"
         onPress={()=> {handleLogin()}}
         text="Entrar"
         size="lg"
         variant="solid"
         disable={!isValidForm}
        />

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

          <CustomButton
            action="primary"
            onPress={()=> {router.push("/create/")}}
            text="Criar Conta"
            size="md"
            variant="link"
            classname="ml-1"
          />

        </View>
      </View>
    </View>
  );
}