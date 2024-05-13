import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (button) => {
    if (button === '=') {
      calculateResult();
    } else if (button === 'C') {
      clearDisplay();
    } else {
      setDisplay(display + button);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(display));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(button)}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  displayText: {
    fontSize: 40,
  },
  resultText: {
    fontSize: 20,
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  buttonText: {
    fontSize: 30,
  },
});
