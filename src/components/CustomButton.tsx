import { ButtonText, Button, ButtonIcon } from "@/components/ui/button";

type CustomButtonProps = {
    text: string;
    variant: "link" | "outline" | "solid"
    size: "sm" | "md" | "lg"
    action: "success" | "destructive" | "primary"
    classname ?: string
    onPress: () => void
    disable?: boolean
}

export function CustomButton({
    text,
    variant,
    size,
    action,
    classname= "mb-4",
    onPress,
    disable = false
}: CustomButtonProps) {
    let solidBg;
    if (action == "success") {solidBg="bg-success-500"} else if (action == "destructive") {solidBg="bg-error-500"} else {solidBg="bg-primary-500"}
    const variantBtn = {
        solid: solidBg,
        outline: "border-primary-500 bg-transparent",
        link: "bg-transparent",
    } as const;

    return (
        <Button variant={variant} onPress={onPress} className={`${classname} ${variantBtn[variant]} ${disable ? "bg-background-muted" : ""}`} size={size} disabled={disable}>
            <ButtonText className={`${disable ? "text-typography-200" : ""}`}>{text}</ButtonText>
        </Button>
    )
}