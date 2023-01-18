import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../utils/colors";

const CustomButton = ({ children, onPress }) => {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.pressed, style.buttonInnerContainer]
            : style.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,

    elevation: 2,
    paddingHorizontal: 16,
    paddingHorizontal: 8,
  },

  buttonText: {
    color: Colors.accent500,
    padding: 16,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
