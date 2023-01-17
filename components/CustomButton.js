import { StyleSheet, View, Text, Pressable } from "react-native";

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
        android_ripple={{ color: "#720636" }}
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
    backgroundColor: "#720636",

    elevation: 2,
    paddingHorizontal: 16,
    paddingHorizontal: 8,
  },

  buttonText: {
    color: "#ffffff",
    padding: 16,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
