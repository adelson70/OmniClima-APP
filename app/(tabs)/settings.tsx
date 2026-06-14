import { View, Text } from "react-native";
import { useAuthStore } from "@/src/store/useAuthStore";
import { Redirect } from "expo-router";

export default function Settings() {
  const { isAuthenticated, isHydrated } = useAuthStore()

  if (!isHydrated) return null
  if (!isAuthenticated) return <Redirect href={"/login"} />

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings 🌦️</Text>
    </View>
  );
}