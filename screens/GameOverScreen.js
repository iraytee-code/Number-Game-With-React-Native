import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import CustomButton from "../components/ui/CustomButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.sumaryText}>
        Your Phone Needed{" "}
        <Text style={styles.highLightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highLightText}>{userNumber}</Text>
      </Text>
      <CustomButton onPress={onStartNewGame}>Start New Game</CustomButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  sumaryText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  highLightText: {
    color: Colors.primary500,
  },
});
