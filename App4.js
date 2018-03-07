import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasTrapesium extends Component {
  constructor(props){
    super(props)
    this.state = {
      sisisatu:0,
      sisidua:0,
      tinggi:0,
      luas:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#CDDC39'}}>

        <View style={{backgroundColor:'#607D8B'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Luas Trapesium
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#FFF3E0'}}>
            <TextInput style = {{height: 50}}
              placeholder="Masukkan Sisi Pertama"
              onChangeText={(sisisatu)=>this.setState({sisisatu})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 50}}
              placeholder="Masukkan  Sisi Kedua"
              onChangeText={(sisidua)=>this.setState({sisidua})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 50}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                luas: (parseInt(this.state.sisisatu)+parseInt(this.state.sisidua))*this.state.tinggi/2
              })}
              title="Hitung"
              color="#212121"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#333333'}}>
          <Text style = {{padding: 10, fontSize: 20, color:'white'}} >
              Sisi Pertama =  {this.state.sisisatu} {"\n\n"}
              Sisi Kedua =  {this.state.sisidua} {"\n\n"}
              Tinggi =  {this.state.tinggi} {"\n\n"}
              Jadi, Luas Trapesium = {this.state.luas}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungLuasTrapesium);
