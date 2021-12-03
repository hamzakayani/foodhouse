import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../assets/css/style';
import FastImage from 'react-native-fast-image';
import {useForm} from 'react-hook-form';

import {Product} from '../interfaces/IProductData';
import {useAddFavourite} from '../hooks/Favourites/useAddFavourite';
import {IAddFavouriteRequest} from '../interfaces/IFavouriteData';
import {useAppSelector} from '../store/hooks';
import {useRemoveFavourite} from '../hooks/Favourites/useRemoveFavourite';
import {SnackbarSuccess} from '../utils/SnackBar';
import {CalculatePercentage} from '../utils/CalculatePercentage';

function AppResturantsCard(productData: Product) {
  console.log(`productDiscount`, productData.productDiscount?.discount);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  console.log(
    `productData?.is_wishlist onSubmitFavourite`,
    productData?.is_wishlist,
  );
  const navigation = useNavigation<any>();
  const [favourite, setFavourite] = useState<boolean>(true);

  const onSubmitFavourite = handleSubmit(() => {
    console.log(`productData?.is_wishlist`, productData?.is_wishlist);
    if (productData?.is_wishlist == false) {
      addFavourite.mutate({
        productId: productData?.id.toString(),
      });
    } else if (productData?.is_wishlist == true) {
      removeFavourite.mutate({
        id: productData?.id,
      });
    }
  });
  const addFavourite = useAddFavourite({
    onSuccess() {
      // setFavourite(!favourite);
      SnackbarSuccess('Successfully Added');
    },
    onError() {},
  });

  const removeFavourite = useRemoveFavourite({
    onSuccess() {
      // setFavourite(!favourite);
    },
    onError() {},
  });

  return (
    <View style={innerStyles.mainContainer}>
      <View>
        <View style={innerStyles.submainContainer}>
          {productData.productDiscount && (
            <Text style={styles.off} numberOfLines={1}>
              Off {CalculatePercentage(
                parseInt(productData.productDiscount.discount.value),
                productData.amount,
              )}%
            </Text>
          )}
          <FastImage
            source={require('../assets/imgs/restaurants.jpeg')}
            style={innerStyles.image}
            resizeMode={'cover'}
          />
          {/* <View style={styles.favourite}>
            <TouchableOpacity>
              <Ionicons
                name={
                  productData.is_wishlist == true ? 'heart-outline' : 'heart'
                }
                size={25}
                color={productData.is_wishlist == true ? '#373737' : '#CE3E3E'}
              />
            </TouchableOpacity>
          </View> */}
        </View>
        <TouchableOpacity
          style={innerStyles.productDetailContainer}
          onPress={() =>
            navigation.navigate('HomeMenus')
          }>
          <Text style={innerStyles.productName}>{productData.name}</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AppResturantsCard;

const innerStyles = StyleSheet.create({
  mainContainer: {
    margin: 5,
    width: Dimensions.get('screen').width/2-30,
    paddingBottom: 8,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#FAF9F6',
    shadowColor: '#E2DFD2',
    shadowOpacity: 0.9,
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderRadius: 8,
  },
  image: {
    height: 150,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 65,
  },
  submainContainer: {
    position: 'relative',
  },
  productDetailContainer: {
    marginHorizontal: 7,
    marginTop: -50,
  },
  productName: {
    fontWeight: '600',
    fontSize: 13,
    color: 'black',
    letterSpacing: 0.25,
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  currentPrice: {
    color: 'red',
    marginRight: 10,
    lineHeight: 19,
    fontSize: 16,
  },
  currentPriceWithoutDiscount: {
    color: 'black',
    marginRight: 10,
    lineHeight: 19,
    fontSize: 16,
  },
  previousPrice: {
    color: 'black',
    lineHeight: 19,
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});
