import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungKelilingTrapesium extends Component {
  constructor(props) {
  super(props);
  this.State = {
      sisisatu: 0,
      sisidua: 0,
      sisitiga: 0,
      sisiempat: 0,
      keliling: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#CDDC39' }}>

        <View style={{ backgroundColor: '#607D8B' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Keliling Trapesium
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#FFF3E0' }}>
            <TextInput
              style={{ height: 50 }}
              placeholder="Masukkan Sisi Pertama"
              onChangeText={(sisisatu) => this.setState({ sisisatu })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 50 }}
              placeholder="Masukkan  Sisi Kedua"
              onChangeText={(sisidua) => this.setState({ sisidua })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 50 }}
              placeholder="Masukkan  Sisi Ketiga"
              onChangeText={(sisitiga) => this.setState({ sisitiga })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 50 }}
              placeholder="Masukkan  Sisi Keempat"
              onChangeText={(sisiempat) => this.setState({ sisiempat })}
              keyboardType='numeric'
            />


            <Button
              onPress={() => this.setState({
              keliling: (parseInt(this.state.sisisatu) + parseInt (this.state.sisidua) + parseInt(this.state.sisitiga)+parseInt(this.state.sisiempat)
            )}
              title="Hitung"
              color="#212121"
              accessibilityLabel="Klik untuk menghitung"
            />

       </View>

        <View style={{margin:20, backgroundColor:'#333333'}}>
          <Text style = {{padding: 10, fontSize: 20, color: 'white'}} >
              Sisi Pertama =  {this.state.sisisatu} {"\n\n"}
              Sisi Kedua =  {this.state.sisidua} {"\n\n"}
              Sisi Ketiga =  {this.state.sisitiga} {"\n\n"}
              Sisi Keempat =  {this.state.sisiempat} {"\n\n"}
              Jadi, Keliling Trapesium = {this.state.keliling}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungKelilingTrapesium);
