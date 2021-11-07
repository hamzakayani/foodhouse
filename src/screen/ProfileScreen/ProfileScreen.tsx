import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from '../../assets/css/style';
import AppOptionCard from '../../component/AppOptionCard';
import {appColors} from '../../utils/colors';

import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import AppAddToCart from '../../component/AppAddToCart';
import AppTextTitle from '../../component/AppTextTitle';

const profileList = [
  {
    id: 1,
    name: 'Address book',
    image: require('../../assets/imgs/locationMarker.png'),
  },
  {
    id: 2,
    name: 'Payment Information',
    image: require('../../assets/imgs/paymentInformation.png'),
  },
  {
    id: 3,
    name: 'Orders',
    image: require('../../assets/imgs/order.png'),
    value: '2',
  },
  {
    id: 4,
    name: 'Favourites',
    image: require('../../assets/imgs/favourite.png'),
    value: '7',
  },
  {
    id: 5,
    name: 'Log Out',
    image: require('../../assets/imgs/logout.png'),
  },
];

const {width} = Dimensions.get('screen');
export default function ProfileScreen() {
  const navigation = useNavigation<any>();
  const [currentSelected, setCurrentSelected] = useState<any>();
  const [openOrderModal, setOpenOrderModal] = useState<boolean>(false);
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  useEffect(() => {
    if (currentSelected == 1) {
      setOpenPaymentModal(false);
      setOpenOrderModal(true);
    } else if (currentSelected == 2) {
      setOpenOrderModal(false);
      setOpenPaymentModal(true);
    } else if (currentSelected == 4) {
      navigation.navigate('FavouritesScreen');
    } else if (currentSelected == 3) {
      navigation.navigate('OrderScreen');
    }
  }, [currentSelected]);

  return (
    <SafeAreaView>
      <View style={innerStyles.mainProfileCover}>
        <Image
          source={require('../../assets/imgs/women.png')}
          style={innerStyles.image}
          resizeMode={'cover'}
        />
        <View style={{marginTop: 30, marginRight: 30}}>
          <Text style={(style.ffbl, {fontSize: 19, fontWeight: '500'})}>
            John Doe
          </Text>
          <Text style={(style.ffbl, {fontSize: 19, fontWeight: '500'})}>
            +100 12345678
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/imgs/EditButton.png')}
              style={innerStyles.editImage}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {profileList.map((profile: any, index: any) => {
        return (
          <AppOptionCard
            key={index}
            data={profile}
            setCurrentSelected={setCurrentSelected}
          />
        );
      })}

      <View>
        <Modal
          isVisible={openOrderModal}
          hasBackdrop={true}
          deviceWidth={width}
          backdropTransitionOutTiming={0}
          animationInTiming={400}
          style={{justifyContent: 'flex-end', bottom: 0, margin: 0}}
          onBackButtonPress={() => {
            setOpenOrderModal(false);
          }}
          onBackdropPress={() => {
            setOpenOrderModal(false);
          }}>
          <View style={innerStyles.container}>
            <View style={innerStyles.modalContainer}>
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <AppTextTitle title={'Address Book'} />
              </View>
              <View
                style={{padding: 16, borderWidth: 1, borderColor: '#000000'}}>
                <Text style={{color: '#070A0D'}}>billing address</Text>
                <Text style={{color: '#070A0D', marginVertical: 5}}>
                  You have not set a default billing address.
                </Text>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('{ressed');
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        color: '#070A0D',
                        fontSize: 12,
                      }}>
                      Update
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: '700',
                        color: '#070A0D',
                        fontSize: 12,
                        marginLeft: 7,
                      }}>
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{padding: 16}}>
                <Text style={{color: '#070A0D', marginVertical: 5}}>
                  shipping address
                </Text>
                <Text style={{color: '#070A0D'}}>
                  You have not set a default shipping address.
                </Text>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: '700',
                        color: '#070A0D',
                        fontSize: 12,
                      }}>
                      Update
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: '700',
                        color: '#070A0D',
                        fontSize: 12,
                        marginLeft: 7,
                      }}>
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* Payment Modal Open */}
      <View>
        <Modal
          isVisible={openPaymentModal}
          hasBackdrop={true}
          deviceWidth={width}
          backdropTransitionOutTiming={0}
          animationInTiming={600}
          style={{justifyContent: 'flex-end', bottom: 0, margin: 0}}
          onBackButtonPress={() => {
            setOpenPaymentModal(false);
          }}
          onBackdropPress={() => {
            setOpenPaymentModal(false);
          }}>
          <View style={innerStyles.container}>
            <View style={innerStyles.modalContainer}>
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <AppTextTitle title={'Payment Information'} />
              </View>
              <ScrollView>
                <View
                  style={{
                    padding: 16,
                    borderWidth: 1,
                    borderColor: '#000000',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text>mastercard</Text>
                    </View>
                    <Text>*** *** **** 3409</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('Pressed update');
                      }}>
                      <Text
                        style={{
                          fontWeight: '700',
                          color: '#070A0D',
                          fontSize: 12,
                        }}>
                        Update
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text
                        style={{
                          fontWeight: '700',
                          color: '#070A0D',
                          fontSize: 12,
                          marginLeft: 7,
                        }}>
                        Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{padding: 16}}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text>mastercard</Text>
                    </View>
                    <Text>*** *** **** 3409</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontWeight: '700',
                          color: '#070A0D',
                          fontSize: 12,
                        }}>
                        Update
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text
                        style={{
                          fontWeight: '700',
                          color: '#070A0D',
                          fontSize: 12,
                          marginLeft: 7,
                        }}>
                        Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <AppAddToCart title={'Add New'} />
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const innerStyles = StyleSheet.create({
  mainProfileCover: {
    flexDirection: 'row',
    height: 110,
    backgroundColor: appColors.white,
    justifyContent: 'space-between',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    margin: 20,
  },
  editImage: {
    height: 55,
    width: 55,
    borderRadius: 50,
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 200,
  },
  modalContainer: {
    backgroundColor: 'white',
    height: 282,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
