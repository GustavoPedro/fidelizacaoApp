import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Dimensions, Image, View } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './src/FrmCliente';
import Details from './src/paginas/Details';

export default class App extends Component {
    render() {
        return (
            <AppDrawerNavigator />
        );
    }
}

const CustomDrawerComponent = (props) =>
    (
        
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: 'white',alignItems:'center',justifyContent:'center' }}>
            <Image source={require('./imagens/a.png')} style={{height:120,width:120,borderRadius:60}}/>
        </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )


const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Details: Details
},
    {
        contentComponent: CustomDrawerComponent
    }
)