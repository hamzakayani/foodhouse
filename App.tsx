import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainFlow} from './Navigators';

function App() {
  return (
    <NavigationContainer>
      <MainFlow />
    </NavigationContainer>
  );
}

export default App;
