import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {AppTextInput} from '../../component/AppTextInput';
import {AppButton} from '../../component/AppButton';

function LoginScreen() {
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
      <View style={innerStyles.loginContainer}>
        <Text style={innerStyles.mainHeading}>Login</Text>
        <Text style={innerStyles.plainText}>
          Please enter your e-mail and password:
        </Text>
        <View style={innerStyles.input_Container}>
          <AppTextInput
            name="email"
            control={control}
            textInputProps={{
              placeholder: 'Email',
              style: {fontSize: 12, color: 'black', backgroundColor: 'white'},
            }}
          />
          <AppTextInput
            name="password"
            control={control}
            textInputProps={{
              placeholder: 'Password',
              secureTextEntry: true,
              style: {fontSize: 12, color: 'black', backgroundColor: 'white'},
            }}
          />
          <AppButton
            text="Login"
            buttonProps={{
              onPress() {
                navigation.navigate('BottomTabNavigator');
              },
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegistrationScreen');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={innerStyles.plainText}>Don't have an account?</Text>
          <Text style={innerStyles.boldText}>Create one</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgetScreen');
          }}>
          <Text style={innerStyles.forgetPassword}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

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
  loginContainer: {
    alignItems: 'center',
    marginTop: -45,
  },
  message: {
    width: 200,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: '700',
    color: 'white',
    marginLeft: 5,
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
  forgetPassword: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
