import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, {useState} from 'react'

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (value) => {
    setGoalText(value)
}

  const addGoalHandler = () => {
    props.onAddGoal(goalText);
    setGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image} 
          source={require('../assets/images/goal.png')}
        />
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Course Goal!' 
          onChangeText={goalInputHandler} 
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={props.onCancelModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button 
              title='ADD GOAl' 
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: "#e4d0ff",
    borderRadius: 4,
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer : {
    flexDirection: "row"
  },
  button: {
    margin: 10,
    width: '30%'
  },
  image: {
    width: 100,
    height: 100, 
    margin: 20
  } 
})