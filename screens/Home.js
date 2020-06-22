import React from 'react';
import {Button,View, Text} from 'react-native';


const Home = () => {

    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
      title="fdsa"      
      onPress={() => navigation.push('Profile')}
      />
    </View>

);
};
export default Home;