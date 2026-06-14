import { Tabs } from "expo-router";
import { ThermometerIcon, GearIcon, MagnifyingGlassIcon } from "phosphor-react-native";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false
    }}
    >
      <Tabs.Screen 
      name="search" 
      options={{ 
        title: "Buscar",
        tabBarIcon: ({color, size}) => (
          <MagnifyingGlassIcon size={size} color={color} />
        )
       }} 
      />

      <Tabs.Screen 
      name="home" 
      options={{ 
        title: "Clima",
        tabBarIcon: ({ color, size}) => (
          <ThermometerIcon size={size} color={color} />
        ) 
      }} 
      />
      
      <Tabs.Screen 
      name="settings" 
      options={{ 
        title: "Config",
        tabBarIcon: ({ color, size }) => (
          <GearIcon size={size} color={color} />
        )
       }} 
      />
    </Tabs>
  );
}