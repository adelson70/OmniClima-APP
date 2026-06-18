import { View } from "react-native";
import { useAuthStore } from "@/src/store/useAuthStore";
import { Redirect, router } from "expo-router";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { SignOutIcon, TrashIcon, UserIcon, WifiHighIcon } from "phosphor-react-native";

export default function Settings() {
  const { isAuthenticated, isHydrated, logout } = useAuthStore()

  if (!isHydrated) return null
  if (!isAuthenticated) return <Redirect href={"/login"} />

  return (
    <View className="flex-1 bg-background-0 px-6 gap-6 pt-16">

      <Button
        variant="outline"
        className="h-20 justify-start rounded-xl border-outline-200"
        onPress={()=> {router.push("/user/")}}
      >
        <ButtonIcon as={UserIcon} />
        <ButtonText>
          Informações Básicas
        </ButtonText>
      </Button>

      <Button
        variant="outline"
        className="h-20 justify-start rounded-xl border-outline-200"
        onPress={()=> {router.push("/sensor/")}}
      >
        <ButtonIcon as={WifiHighIcon} />
        <ButtonText>
          Sensores
        </ButtonText>
      </Button>


      <Button
        variant="outline"
        className="h-20 justify-start rounded-xl border-outline-200"
        onPress={()=> {logout()}}
      >
        <ButtonIcon as={SignOutIcon} />
        <ButtonText>
          Sair
        </ButtonText>
      </Button>

      {/* <Button
        action="negative"
        variant="link"
        className="h-20 justify-center rounded-xl"
      >
        <ButtonText>
          Excluir Conta
        </ButtonText>
      </Button> */}

    </View>
  );
}