import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});