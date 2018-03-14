import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#CDDC39' }}>

        <View style={{ backgroundColor: '#607D8B' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: 'rgb(121, 121, 121)' }}>
            <TextInput
            style={{ height: 50, fontSize: 17, color: 'rgb(32, 32, 32)' }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 50, fontSize: 17, color: 'rgb(32, 32, 32)' }}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 50, fontSize: 17, color: 'rgb(32, 32, 32)' }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              color="#212121"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: 'rgb(121, 121, 121)' }}>
          <Text style={{ padding: 10, fontSize: 20, color: 'white' }} >
              Panjang = {this.state.panjang} {'\n\n'}
              Lebar = {this.state.lebar} {'\n\n'}
              Tinggi = {this.state.tinggi } {'\n'}
          </Text>
          </View>
          <View style={{ margin: 20, backgroundColor: 'rgb(121, 121, 121)' }}>
          <Text style={{ padding: 10, fontSize: 20, color: 'white' }} >
              Jadi, Volume Balok = {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => VolumeBalok);
