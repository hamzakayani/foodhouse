import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../assets/css/style';
import AppProductCard from '../../component/AppProductCard';
import {appColors} from '../../utils/colors';

const sampleCategory = [
  'Shop All',
  'Max Dresses',
  'Blazer Dresses',
  'Shirt Dresses',
  'Shirt Dresses',
  'Shirt Dresses',
];
export default function ItemScreen() {
  const navigation = useNavigation<any>();
  const [profileSubCategory, setProfileSubCategory] = useState<any>('Shop All');

  return (
    <SafeAreaView style={{padding: 16}}>
      <View style={{height: 50}}>
        <ScrollView
          contentContainerStyle={[{flexDirection: 'row'}, styles.pb5]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {sampleCategory.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setProfileSubCategory('TopAndShirts');
                }}
                style={{
                  width: 90,
                  height: 25,
                  marginRight: 3,
                  marginLeft: 3,
                  backgroundColor: appColors.lightDarkGrey,

                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.fs12,
                    styles.ffm,
                    styles.colorWhite,
                    {marginTop: 2},
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductFilterScreen')}
        style={{
          alignItems: 'center',
          marginRight: 5,
          flexDirection: 'row',
          alignSelf: 'flex-end',
          marginVertical: 5,
        }}>
        <Text style={{color: '#9B9B9B' , marginRight:3}}>Filter</Text>
        <Ionicons name="chevron-down" size={15} color="#34283E"  />
      </TouchableOpacity>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <AppProductCard />
          <AppProductCard />
          <AppProductCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
