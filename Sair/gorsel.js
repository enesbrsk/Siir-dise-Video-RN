import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Canbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
  
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
               <Image
        style={styles.picture}
       source = {require('../picture/atilla.jpg')} />
        <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
        <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
        <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
        <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
        <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
        <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
       <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
       <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
       <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
       <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />

      
</ScrollView>
    </View>
  );
};

export default Canbaba;

const styles = StyleSheet.create({
  container:{
    flexDirection : 'column',
    flex:1,
    marginHorizontal:30,
    paddingVertical:239 
  },
  picture:{
    width:300,
    height:250
  }
 
})