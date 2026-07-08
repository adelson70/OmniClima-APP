import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { EyeClosedIcon, EyeIcon } from "phosphor-react-native";
import { useState } from "react";

type CustomInputProps = {
    message?: string;
    placeholder: string;
    value: string;
    mode: "email" | "password" | "text" | "number"
    onChangeText: (text: string) => void
    onValidate?: (isValid: boolean) => void
}

export function CustomInput({
    message,
    placeholder,
    value,
    mode,
    onChangeText,
    onValidate,
}: CustomInputProps) {

    const [showPassword, setShowPassword] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const verifyEmail = (text: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(text);
    }

    const verifyNumber = (text: string) => {
        const numberRegex = /^-?\d+([.,]\d+)?$/;
        return numberRegex.test(text);
    }

    const handleChangeText = (text: string) => {

        onChangeText(text);

        if (mode === "email") {
            setIsValid(verifyEmail(text));
            onValidate?.(verifyEmail(text))
            setErrorMessage(verifyEmail(text) ? "" : "Email inválido");
            return;
        }

        if (mode === "number") {
            setIsValid(verifyNumber(text));
            onValidate?.(verifyNumber(text))
            setErrorMessage(verifyNumber(text) ? "" : "Número inválido");
            return;
        }

        setIsValid(true)
        setErrorMessage("")
    }

    return (
        <>
            {errorMessage && (
                <Text className="text-error-500 text-sm">{errorMessage}</Text>
            )}
            {message && (
                <Text className="text-typography-500 text-sm">{message}</Text>
            )}
            <Input className="mb-4">
                <InputField
                    placeholder={placeholder}
                    value={value}
                    keyboardType={mode === "email" ? "email-address" : mode === "number" ? "numeric" : "default"}
                    autoCapitalize="none"
                    onChangeText={handleChangeText}
                    {...(mode === "password" && {
                        secureTextEntry: !showPassword,
                    })}
                />
                {mode === "password" && (
                    <InputSlot onPress={() => setShowPassword(!showPassword)} className="mr-3">
                        <InputIcon as={showPassword ? EyeIcon : EyeClosedIcon} className="w-6 h-6" />
                    </InputSlot>
                )}
            </Input>
        </>
    )
}