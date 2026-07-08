import { ButtonText, Button, ButtonIcon } from "@/components/ui/button";
import { router } from "expo-router";
import { ArrowLeftIcon } from "phosphor-react-native";

type ButtonBackProps = {
    onPress?: () => void;
};

export function ButtonBack({
    onPress = () => router.back(),
}: ButtonBackProps) {
    return (
        <Button
            onPress={onPress}
            variant="link"
            className="absolute top-16 left-4 z-10"
        >
            <ButtonIcon as={ArrowLeftIcon} />
            <ButtonText>Voltar</ButtonText>
        </Button>
    );
}