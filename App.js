import React from 'react';
import {SafeAreaView} from 'react-native';
import AppContainer from './src/AppContainer';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;