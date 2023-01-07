import { FlatList, StyleSheet, View, ToastAndroid, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (goalText) => {
    if(goalText !== '') {
      setGoalList(currentCourseGoals => [...currentCourseGoals, 
      {text: goalText, id: Math.random().toString()}
    ]);

      setModalIsVisible(false)
    }
  }

  const deleteGoalHandler = (id) => {
    setGoalList(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });

    ToastAndroid.show("Goal Deleted", ToastAndroid.SHORT);
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
        <GoalInput 
          onAddGoal={addGoalHandler}
          onCancelModal={endAddGoalHandler} 
          visible={modalIsVisible}
        />

        <View style={styles.goalsContainer}>

          <FlatList data={goalList} renderItem={itemData => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id} 
                onDeleteItem={deleteGoalHandler}
                
              />
            )
          }} keyExtractor={(item, index) => {return item.id}} />
              
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  
  goalsContainer: {
    flex: 5
  }
});
