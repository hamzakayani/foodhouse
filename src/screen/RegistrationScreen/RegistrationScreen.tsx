import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {AppTextInput} from '../../component/AppTextInput';
import {AppButton} from '../../component/AppButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

function RegistrationScreen() {
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
      <View style={innerStyles.registerContainer}>
        <Text style={innerStyles.mainHeading}>Register</Text>
        <Text style={innerStyles.plainText}>
          Please fill in the information below:
        </Text>
        <View style={innerStyles.input_Container}>
          <AppTextInput
            name="email"
            control={control}
            textInputProps={{
              placeholder: 'First Name',
              style: {fontSize: 12, color: 'black', backgroundColor: 'white'},
            }}
          />
          <AppTextInput
            name="email"
            control={control}
            textInputProps={{
              placeholder: 'Last Name',
              style: {fontSize: 12, color: 'black', backgroundColor: 'white'},
            }}
          />
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
            text="Create my account"
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
          <Text style={innerStyles.plainText}>You have an account?</Text>
          <Text style={innerStyles.boldText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegistrationScreen;

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
  registerContainer: {
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
});
