import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import { ButtonProps } from "@/types/type";

// Background variant styles
const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case "secondary":
            return { backgroundColor: "#6B7280" }; // gray-500
        case "danger":
            return { backgroundColor: "#EF4444" }; // red-500
        case "success":
            return { backgroundColor: "#10B981" }; // green-500
        case "outline":
            return { backgroundColor: "transparent", borderWidth: 1, borderColor: "#D1D5DB" }; // border-neutral-300
        default:
            return { backgroundColor: "#0286FF" }; // default blue
    }
}

// Text variant styles
const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
    switch (variant) {
        case "secondary":
            return { color: "#FFFFFF" }; // white text for light variant
        case "danger":
            return { color: "#000000" }; // black text for dark variant
        case "success":
            return { color: "#6B7280" }; // muted text for secondary variants
        default:
            return { color: "#FFFFFF" }; // default white text
    }
}

const CustomButton = ({
    onPress, 
    title, 
    bgVariant = "primary", 
    textVariant = "default", 
    IconLeft, 
    IconRight, 
    className, 
    style,  // Allow additional styles to be passed
    ...props 
}: ButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonContainer, getBgVariantStyle(bgVariant), style]}  // Apply background variant dynamically
        {...props}
    >
        {IconLeft && <IconLeft />} {/* Left Icon */}
        <Text style={[styles.text, getTextVariantStyle(textVariant)]}>{title}</Text>
        {IconRight && <IconRight />} {/* Right Icon */}
    </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: "40%", // Adjust width as needed
        borderRadius: 9999, // Full rounded corners
        flexDirection: "row", // Row direction for icon and text
        justifyContent: "center", // Center text and icons
        alignItems: "center", // Center vertically
        shadowColor: "#9CA3AF", // Shadow color (neutral)
        shadowOpacity: 0.7, // Shadow opacity
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowRadius: 4, // Shadow radius
        elevation: 5, // Elevation for Android shadow
        height: 50, // Set a fixed height for the button
        marginBottom: 5, // Add margin for spacing
    },
    text: {
        fontFamily: "Jakarta-Bold",
        fontSize: 16, // You can adjust the font size here
        marginHorizontal: 5, // Add some margin for spacing with icons
    },
});
