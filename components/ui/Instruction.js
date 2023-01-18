import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const Instruction = ({ children }) => {
  return <Text style={styles.introText}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  introText: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
});
