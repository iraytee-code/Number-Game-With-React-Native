import { TextInput, View, Alert } from "react-native";
import { StyleSheet } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import { useState } from "react";
import Colors from "../utils/colors";
import { AntDesign } from "@expo/vector-icons";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const handleInput = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("Invalid Input", "Entry has to be a valid Input", [
        { text: "Back", style: "destructuve", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Title>Guess A Number</Title>
      </View>

      <Card>
        <Instruction>Enter a Number!!!</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleInput}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={resetInputHandler}>
              <AntDesign name="reload1" size={24} color={Colors.accent500} />
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={confirmInputHandler}>
              <AntDesign
                name="checksquare"
                size={24}
                color={Colors.accent500}
              />
            </CustomButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  titleContainer: {
    padding: 24,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
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
