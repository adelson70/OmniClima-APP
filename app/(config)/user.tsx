import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { ArrowLeftIcon } from "phosphor-react-native";
import { View } from "react-native";

export default function User() {
  return (
    <View className="flex-1 bg-background-0 px-6">
      {/* Voltar */}
      <Button
        onPress={() => { router.replace("/settings") }}
        variant="link"
        className="absolute top-16 left-4 z-10"
      >
        <ButtonIcon as={ArrowLeftIcon} />
        <ButtonText>Voltar</ButtonText>
      </Button>
    </View>
  );
}