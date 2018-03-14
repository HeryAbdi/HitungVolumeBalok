import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
      <View style={style.contHeader}>
        <Text style={style.textHeader}>
        {props.HeaderText}
        </Text>
    </View>
  );
};

const styles = {
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: 60,
    position: 'relative'
  },
  textHeader: {
    color: 'white',
    fontSize: 19,
    padding: 10

  }
}

export default Header;
