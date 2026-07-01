import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Text } from "react-native";
import { tokens, rgb } from "@/src/theme"
import { tabs } from "@/src/constants/tabs";

export function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        height: 52,
        backgroundColor: rgb(tokens.colors.primary["0"])
      }}
    >
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const styles = {
          iconColor: focused
            ? rgb(tokens.colors.primary[500])
            : rgb(tokens.colors.typography[400]),
        
          iconPadding: focused 
            ? 18 
            : 10,
            
          iconMarginBottom: focused
            ? 5
            : 0,
        };

        const tab = tabs[route.name as keyof typeof tabs];
        const Icon = tab.Icon;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Icon
              size={24}
              color={styles.iconColor}
              weight={focused ? "fill" : "regular"}
              style={{
                padding: styles.iconPadding,
                marginBottom: styles.iconMarginBottom,
               }}
            />

          </TouchableOpacity>
        );
      })}
    </View>
  );
}