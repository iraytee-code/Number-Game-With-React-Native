import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import CustomButton from "../components/ui/CustomButton";
import Instruction from "../components/ui/Instruction";
import Card from "../components/ui/Card";
import { AntDesign } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Computer's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction>Higher Or Lower?</Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="caretdown" size={24} color="white" />
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="caretup" size={24} color="white" />
            </CustomButton>
          </View>
        </View>
      </Card>
      <View>{/* <Text>Log Rounds</Text> */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  buttonContainer: {
    flex: 1,
  },
});
