import { router } from "expo-router";
import { View } from "react-native";

import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/src/store/useAuthStore";
import { CustomInput } from "@/src/components/CustomInput";
import { CustomButton } from "@/src/components/CustomButton";
import { ButtonBack } from "@/src/components/ButtonBack";
import { Divisor } from "@/src/components/Divisor";

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
      <ButtonBack onPress={() => {router.replace("/home")}}/>

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
        <CustomButton
          text="Esqueceu sua senha?"
          variant="link"
          action="primary"
          onPress={()=> {router.push("/forget-password")}}
          size="md"
          classname="self-end mb-4 translate-y-[-10]"
        />

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
        <Divisor text="ou" />

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