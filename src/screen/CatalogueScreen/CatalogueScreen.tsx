import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from '../../assets/css/style';
import AppCatalogueCategory from '../../component/AppCatalogueCategory';
import AppTextTitle from '../../component/AppTextTitle';

export default function CatalogueScreen() {
  return (
    <SafeAreaView style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
      <ScrollView>
        <AppTextTitle title="Catalogue" />
        <AppCatalogueCategory catalogueName="Women" />
        <AppCatalogueCategory catalogueName="Men" />
        <AppCatalogueCategory catalogueName="Kids" />
        <AppCatalogueCategory catalogueName="Beauty" />
        <AppCatalogueCategory catalogueName="Home" />
      </ScrollView>
    </SafeAreaView>
  );
}
