import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable, TouchableOpacity} from 'react-native';

function App(): React.JSX.Element {
  const [task, setTask] = React.useState<string>('');
  const [taskarr, settaskarr] = React.useState<string[]>([]);

  const handleAdd = () => {
    settaskarr([...taskarr, task]);
    setTask('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Today's Task</Text>
          <View style={{marginTop: 15}}>
            {taskarr.map((task, index) => (
              <Pressable onPress={() => {
                settaskarr(taskarr.filter((_, i) => i !== index))}
                }>
                <Task key={index} task={task} />
              </Pressable>))}
            </View>
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          onChange={(e) => setTask(e.nativeEvent.text)}
          value={task}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Text style={{borderColor:'black', borderWidth:1, padding:10, borderRadius:8, marginBottom:10, backgroundColor:'black', color:'white', fontWeight:'bold'}}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    width: '80%',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
  },
  task: {
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function Task(props) {
  return (
    props.task ? (
      <View style={styles.task}>
        <View style={{borderWidth: 2, borderColor: "black", borderRadius: 50, width: 15, height: 15, marginRight: 6}}></View>
        <Text>{props.task}</Text>
      </View>
    ) : (
      <Text></Text>
    )
  );
}

export default App;
