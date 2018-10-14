import { TouchableHighlight, View, DatePickerAndroid, Button, Alert,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import styles from './buttonsStyle';



export class BtnRed extends Component {  
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => Alert.alert("oi")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </View>
      </TouchableHighlight>
      </View>
    );
  }
}
