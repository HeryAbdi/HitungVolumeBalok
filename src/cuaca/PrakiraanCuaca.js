import React from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';

export default class PrakiraanCuaca extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      kota:''
    };
  };

  render(){
    return(
      <View>
      <Text>Masukkan Nama Kota lalu Tekan Enter</Text>
      <TextInput
      onSubmitEditing={
        (kota) => this.setState({kota})
      }
      </View>
    )
  }
}
