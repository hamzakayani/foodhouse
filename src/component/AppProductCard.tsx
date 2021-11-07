import React, {useState} from 'react';
import {StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../assets/css/style';

function AppProductCard(props: any) {
  
  const navigation = useNavigation<any>();
  const [favourite, setFavourite] = useState<boolean>(false);

  return (
    <View style={innerStyles.mainContainer}>
      <View >
        <View style={innerStyles.submainContainer}>
          {props.sale ? (
            <Text style={styles.off}>-50%</Text>
          ) : (
            <Text style={styles.off}>-50%</Text>
          )}
          <Image
            source={require('../assets/imgs/black.jpg')}
            style={innerStyles.image}
            resizeMode={'cover'}
          />
          <View style={styles.favourite}>
            <TouchableOpacity onPress={() => setFavourite(!favourite)}>
              <Ionicons
                name={favourite ? 'heart-outline' : 'heart'}
                size={25}
                color={favourite ? '#373737' : '#CE3E3E'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={innerStyles.productDetailContainer} onPress={()=>navigation.navigate("ProductDetailScreen")}>
          <Text style={innerStyles.productName}>
            Black Stripes Sweater Pair
          </Text>
          <View style={innerStyles.priceContainer}>
            <Text style={innerStyles.currentPrice}> $300</Text>
            <Text style={innerStyles.previousPrice}> $600</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AppProductCard;

const innerStyles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    width: 160,
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
    height: 221,
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
  previousPrice: {
    color: 'black',
    lineHeight: 19,
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});
