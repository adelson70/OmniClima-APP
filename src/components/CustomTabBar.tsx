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
        height: 70,
      }}
    >
      {state.routes.map((route, index) => {
        const focused = state.index === index;

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
              size={26}
              color={focused ? rgb(tokens.colors.indicator["primary"]) : rgb(tokens.colors.indicator["muted"])}
              weight={focused ? "fill" : "regular"}
            />

            <Text
              style={{
                color: focused ? rgb(tokens.colors.indicator["primary"]) : rgb(tokens.colors.indicator["muted"]),
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}