import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from '../assets/css/style';

type CatalagueSections =
  | 'TopAndShirts'
  | 'BagsAndAccessories'
  | 'Bags'
  | 'Sports'
  | 'Home'
  | 'MenShoe'
  | 'LadiesBags';

export default function AppOurFavoritesList() {
  const [profileSection, setProfileSection] =
    useState<CatalagueSections>('TopAndShirts');
  const carouselItems = [
    'Burgers',
    'Beverages',
    'Sides',
    'Desserts',
    'Deals',
  ];
  return (
    <View>
      <View style={{flexShrink: 0}}>
        <ScrollView
          contentContainerStyle={[{flexDirection: 'row'}, styles.pb5]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {carouselItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setProfileSection('TopAndShirts');
                }}
                style={[
                  styles.p10,
                  styles.br10,
                  styles.mt10,
                  styles.shadow,
                  {
                    marginLeft: 5,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#EA8093'
                  },
                ]}>
                  <Text
                    style={[
                      styles.fs16,
                      styles.ffm,
                      styles.colorBlack,
                      {
                        // fontWeight: 'bold',
                      },
                    ]}>
                    {item}
                  </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
