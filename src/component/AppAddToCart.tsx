import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function AppAddToCart(props: any) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={innerStyles.cartContainer}
      onPress={() => {
        if (props.navigationScreen) {
          navigation.navigate(props.navigationScreen);
        }
      }}>
      <Text style={innerStyles.addToCartText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default AppAddToCart;

const innerStyles = StyleSheet.create({
  cartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 8,
  },
  addToCartText: {
    fontWeight: '400',
    fontSize: 17,
    width: '100%',
    paddingVertical: 13,
    backgroundColor: '#464447',
    borderRadius: 8,
    color: 'white',
    textAlign: 'center',
  },
});
