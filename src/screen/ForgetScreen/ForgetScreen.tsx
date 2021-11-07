import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {AppTextInput} from '../../component/AppTextInput';
import {AppButton} from '../../component/AppButton';

function ForgetScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation<any>();
  return (
    <View style={innerStyles.main_container}>
      <Image
        source={require('../../assets/imgs/logo.jpg')}
        style={innerStyles.image}
        resizeMode={'contain'}
      />
      <View style={innerStyles.forgetContainer}>
        <Text style={innerStyles.mainHeading}>Recover password</Text>
        <View style={innerStyles.message}>
          <Text style={innerStyles.plainText}>Please enter your e-mail</Text>
        </View>
        <View style={innerStyles.input_Container}>
          <AppTextInput
            name="email"
            control={control}
            textInputProps={{
              placeholder: 'Email',
              style: {fontSize: 12, color: 'black', backgroundColor: 'white'},
            }}
          />
          <AppButton
            text="Submit"
            buttonProps={{
              onPress() {},
              style: {
                backgroundColor: 'white',
                marginVertical: 20,
                marginTop: 5,
                height: 40,
              },
            }}
            innerTextProps={{
              style: {
                fontWeight: '700',
                fontSize: 14,
                color: 'black',
              },
            }}
          />
        </View>
        <View style={innerStyles.message}>
          <Text style={innerStyles.plainText}>Remember your password?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            style={{marginTop: 5}}>
            <Text style={innerStyles.boldText}> Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ForgetScreen;

const innerStyles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  image: {
    height: 90,
    width: 170,
    alignSelf: 'center',
    marginBottom: 65,
  },
  forgetContainer: {
    alignItems: 'center',
    marginTop: -45,
  },
  boldText: {
    fontWeight: '700',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginLeft: 5,
  },
  message: {
    width: 200,
    marginBottom: 10,
  },
  mainHeading: {
    color: 'white',
    fontSize: 22,
    marginVertical: 10,
  },
  plainText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  input_Container: {
    width: 320,
  },
});
