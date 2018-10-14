import React, { Component } from 'react';
import { Button, Alert, Platform, Image, StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight,DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BtnRed } from './Components/buttons';

import styles from './FrmClienteStyle';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      texto: ''
    }
  }
   buscarData = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(1999, 4, 1)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ data: day.toString() + '-' + (month + 1.0).toString() + '-' + year.toString() });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Insira seu Nome</Text>

        <TextInput
          style={styles.input}
          placeholder="Escreva seu nome">
          {this.state.texto}
        </TextInput>

        <Text>Insira seu CPF</Text>

        <TextInput
          style={styles.input}
          placeholder="Escreva seu cpf"
        >{this.state.texto}</TextInput>

        <Text>Qual a sua data de nascimento?</Text>

        <View style={styles.containerData}>
          <TextInput
            style={styles.data}
            placeholder="data"
          >{this.state.data}</TextInput>

          <TouchableHighlight onPress={() => this.buscarData()} style={this.props.estilo}>
            <View>
              <Icon name={'calendar'} color='#FA58AC' size={32} style = {styles.btnData} />
            </View>
          </TouchableHighlight>          

        </View>

        <Text>Insira seu número de telefone</Text>

        <TextInput
          style={styles.input}
          placeholder="numero de telefone"
        >{this.state.texto}</TextInput>

        <BtnRed />

      </View>
    );
  }

}

