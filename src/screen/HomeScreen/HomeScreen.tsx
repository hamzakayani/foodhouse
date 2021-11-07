import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from '../../assets/css/style';
import AppCaraosaul from '../../component/AppCaraosaul';
import AppOurFavoritesList from '../../component/AppOurFavoritesList';
import AppProductCard from '../../component/AppProductCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <AppCaraosaul />
        <View style={{paddingRight: 16, paddingLeft: 16, paddingBottom: 16}}>
          {/* Horizontal Our Favourite Scroll View */}
          <View>
            <Text
              style={[
                styles.ffgt,
                styles.fs20,
                {color: '#34283E', fontWeight: '500'},
              ]}>
              OUR FAVORITES
            </Text>
            <AppOurFavoritesList />
          </View>

          <View style={styles.mt10}>
            <Text style={[styles.ffgt, styles.fs20, {color: '#34283E'}]}>
              FIND THINGS YOU'LL LOVE
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <AppProductCard />
              <AppProductCard />
              <AppProductCard />
              <AppProductCard />
              <AppProductCard />
              <AppProductCard />
              <AppProductCard />
              <AppProductCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
