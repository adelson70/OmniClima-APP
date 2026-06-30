import { CustomTabBar } from "@/src/components/CustomTabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="search" />
      <Tabs.Screen name="home" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}