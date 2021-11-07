import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import AppAddToCart from '../../component/AppAddToCart';
import AppCounterItem from '../../component/AppCounterItem';
import AppTextTitle from '../../component/AppTextTitle';

export default function CartScreen() {
  return (
    <SafeAreaView style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
      <ScrollView>
        <AppTextTitle title="Cart" />
        <AppCounterItem
          productName="Black stripes Sweater"
          productPrice="300"
        />
        <AppCounterItem
          productName="Black stripes Sweater"
          productPrice="300"
        />
        <View style={{bottom: 0}}>
          <AppAddToCart
            title={'Check Out'}
            navigationScreen={'CheckoutScreen'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
