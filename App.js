/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  NativeEventEmitter,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

let NativeManager = NativeModules.NetworkManager;
let NativeEmitter =  new NativeEventEmitter(NativeModules.NetworkManager);



let BluetoothCP = require('react-native-bluetooth-cross-platform');


export default class App extends Component {
  componentWillMount(){
    BluetoothCP.advertise();
  }
  componentDidMount(){
    BluetoothCP.getNearbyPeers();
  }
  render() {
    return (
      <View>
        <Text>Cai loz j v @@</Text>
      </View>
    );
  }
  componentWillUnmount(){
    BluetoothCP.disconnectFromPeer();
  }
}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
