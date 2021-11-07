import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import AppProductCard from '../../component/AppProductCard';
import AppTextTitle from '../../component/AppTextTitle';

export default function FavouritesScreen() {
  return (
    <SafeAreaView style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
      <ScrollView>
        <AppTextTitle title="Favourites" />
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
