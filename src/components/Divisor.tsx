import { View } from "react-native";
import { Text } from "@/components/ui/text";


type DivisorProps = {
    text?: string;
};

export function Divisor({
    text
}: DivisorProps) {
    return (
        <View className="flex-row items-center my-8">
            <View className="flex-1 h-px bg-outline-200" />

            {text && (
                <Text className="mx-4 text-typography-500">
                    {text}
                </Text>
            )}
            
            <View className="flex-1 h-px bg-outline-200" />
        </View>
    );
}