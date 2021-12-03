import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {AppTextInput} from '../../component/AppTextInput';
import {AppButton} from '../../component/AppButton';
import {useLoginUser} from '../../hooks/Auth/useLoginUser';
import {SnackbarError} from '../../utils/SnackBar';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../store/userSlice';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter valid email')
    .trim(),
  password: yup
    .string()
    .required('Please enter your Password')
    .min(5, 'Password should be 6 character long')
    .matches(
      /^[^\s].+[^\s]$/,
      '*No spaces allowed at the beginning and the end',
    ),
});

function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(values => {
    console.log('Values being', values);
    // navigation.navigate('BottomTabNavigator');
    dispatch(loginUser({
      "statusCode": 200,
      "message": "success",
      "user": {
          "id": 13,
          "first_name": "sehrish",
          "last_name": "munir",
          "email": "sehrish@gmail.com",
          "username": '',
          "is_email_verified": true,
          "phone_number": "45567853",
          "is_blocked": false,
          "dob": '',
          "gender": '',
          "created_at": "2021-11-17T10:13:25.329Z",
          "updated_at": "2021-11-26T07:42:32.645Z",
          "role": {
              "id": 4,
              "name": "customer"
          }
      },
      "refreshToken": "1twevpbe6ia",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOjE4NSwidXNlcklkIjoxMywicm9sZSI6ImN1c3RvbWVyIiwicmVmcmVzaFRva2VuIjoiMXR3ZXZwYmU2aWEiLCJpYXQiOjE2MzgwMzY3MDksImV4cCI6MTYzODQ2ODcwOX0.a3f6Zao9tyJQ9BNmCNj4XbVZ0GlDLfDpQFr38nDSvlc",
      "expiry_time": "432000"
    }));
    reset();
    // loginUserRequest.mutate({
    //   email: values.email,
    //   password: values.password,
    //   deviceName: 'MOBILE',
    // });
  });
  
  const loginUserRequest = useLoginUser({
    async onSuccess(res) {
      console.log('response is', res);
      dispatch(loginUser(res));
      reset();
    },
    onError(err) {
      SnackbarError(err.message);
    },
  });

  return (
    <View style={innerStyles.main_container}>
      <Image
        source={require('../../assets/imgs/logo2.jpeg')}
        style={innerStyles.image}
        resizeMode={'contain'}
      />
      {/* <Image
        source={require('../../assets/imgs/logo1.png')}
        style={innerStyles.image}
        resizeMode={'contain'}
      /> */}
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
          {errors.email && (
            <Text style={innerStyles.errorField}>
              {errors.email['message']}
            </Text>
          )}
          <AppTextInput
            name="password"
            control={control}
            textInputProps={{
              placeholder: 'Password',
              secureTextEntry: true,
              style: {fontSize: 12, color: 'black', backgroundColor: 'white'},
            }}
          />
          {errors.password && (
            <Text style={innerStyles.errorField}>
              {errors.password['message']}
            </Text>
          )}
          <AppButton
            text="Login"
            buttonProps={{
              onPress: onSubmit,
              style: {
                backgroundColor: '#429b44',
                marginVertical: 20,
                marginTop: 5,
              },
            }}
            innerTextProps={{
              style: {
                fontWeight: '700',
                fontSize: 14,
                color: '#fff',
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
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 190,
    alignSelf: 'center',
    // marginBottom: 65,
  },
  loginContainer: {
    alignItems: 'center',
    // marginTop: -45,
  },
  message: {
    width: 200,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: '700',
    color: 'black',
    marginLeft: 5,
  },
  mainHeading: {
    color: 'black',
    fontSize: 22,
    marginVertical: 10,
  },
  plainText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  input_Container: {
    width: 320,
  },
  forgetPassword: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  errorField: {
    fontSize: 10,
    color: 'red',
    fontFamily: 'OpenSans-Regular',
  },
});
