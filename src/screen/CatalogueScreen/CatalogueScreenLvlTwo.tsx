import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import styles from '../../assets/css/style';
import AppCatalogueCategory from '../../component/AppCatalogueCategory';
import {appColors} from '../../utils/colors';

export default function CatalogueScreenLvlTwo() {
  const [selectedIndex, setselectedIndex] = useState(0);
  const handleIndexChange = (index: any) => {
    setselectedIndex(index);
  };
  return (
    <SafeAreaView>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
        <SegmentedControlTab
          tabTextStyle={{color: appColors.black}}
          activeTabStyle={{
            backgroundColor: appColors.white,
            borderBottomColor: appColors.black,
          }}
          activeTabTextStyle={{
            color: appColors.black,
          }}
          tabStyle={{
            padding: 20,
            borderColor: appColors.white,
            backgroundColor: appColors.white,
            borderRadius: 0,
          }}
          values={['WOMEN', 'MEN', 'BEAUTY', 'KIDS', 'HOME']}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
        />
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedIndex == 0 && (
          <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
            <AppCatalogueCategory catalogueName="Women" />
          </View>
        )}
        {selectedIndex == 1 && (
          <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
            <AppCatalogueCategory catalogueName="Women" />
          </View>
        )}
        {selectedIndex == 2 && (
          <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
            <AppCatalogueCategory catalogueName="Women" />
          </View>
        )}
        {selectedIndex == 3 && (
          <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
            <AppCatalogueCategory catalogueName="Women" />
          </View>
        )}
        {selectedIndex == 4 && (
          <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
            <AppCatalogueCategory catalogueName="Women" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
