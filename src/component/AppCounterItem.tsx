import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IAppCatalogue {
  productName: string;
  productPrice: string;
}

export default function AppCounterItem({
  productName,
  productPrice,
}: IAppCatalogue) {
  const navigation = useNavigation<any>();
  return (
    <View>
      <View style={innerStyles.catalogueCard}>
        <Image
          source={require('../assets/imgs/women.png')}
          style={innerStyles.image}
          resizeMode={'contain'}
        />

        <View style={{flexDirection: 'column', marginRight: 20}}>
          <Text style={[innerStyles.text, {marginTop: 10}]}>{productName}</Text>
          <Text style={[innerStyles.text, {marginTop: 10}]}>
            ${productPrice}
          </Text>
        </View>

        <View style={{flexDirection: 'column', marginRight: 20, marginTop: 10}}>
          <TouchableOpacity>
            <Ionicons name={'add-circle-outline'} size={20} />
          </TouchableOpacity>
          <View style={{marginTop: 3, marginBottom: 3, marginLeft: 5}}>
            <Text>1</Text>
          </View>

          <TouchableOpacity>
            <Ionicons name={'remove-circle-outline'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const innerStyles = StyleSheet.create({
  catalogueCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    height: 88,
    width: 88,
  },
  imageCounter: {
    height: 18,
    width: 8,
  },
  text: {
    fontFamily: 'Gotham',
    fontSize: 18,
    fontWeight: '500',
  },
  textPrice: {
    fontFamily: 'Gotham',
    fontSize: 16,
    fontWeight: '500',
  },
});
