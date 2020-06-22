import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import { Row } from 'native-base';
import {Linking} from 'react-native';

const nazimbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=Sdq2GAaX8QM");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Ne Güzel Şey Hatırlamak Seni</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=P1Q5ZlOE9cs");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Henüz Vakit Varken Gülüm</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=ZJ_nvvRaa6M");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Dünya Adaletsiz Çocuk</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=9prRRQORRs4");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Güzel Günler Göreceğiz</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=dCopkYyeHkk");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Seni Düşünmek</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=On03x0f7hiI&list=PLltV1KEFoQI2tpq6Wsa1aFVW1UZrE2Yum&index=13");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Hoşgeldin Kadınım</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=rO7VyzMQjA8&list=PLltV1KEFoQI2tpq6Wsa1aFVW1UZrE2Yum&index=14");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Memleketim</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=3WE36xOmcTw&list=PLltV1KEFoQI2tpq6Wsa1aFVW1UZrE2Yum&index=22");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Yağmur Çiseliyor</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=2j3Ft0D6Ous&list=PLltV1KEFoQI2tpq6Wsa1aFVW1UZrE2Yum&index=23");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Seviyorum Seni</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=nLwth3nlz10&list=PLltV1KEFoQI2tpq6Wsa1aFVW1UZrE2Yum&index=25");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Delikanlık İyi Bak Yıldızlara</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=qmkmaWH4cLE&list=PLltV1KEFoQI2tpq6Wsa1aFVW1UZrE2Yum&index=31");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Küsmek Nedir Bilirmisin</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=bOi7saR1TWU&list=PLltV1KEFoQI2tpq6Wsa1aFVW1UZrE2Yum&index=60");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
            <Text style={styles.Text} >Ceviz Ağacı</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>

</ScrollView>
    </View>
  );
};

export default nazimbaba;

const styles = StyleSheet.create({
  container:{
    flexDirection : 'column',
    flex:1,
},
  Button:{
     paddingHorizontal:10,
    paddingVertical:15,
    fontSize:22,
    backgroundColor:'#f9f9f9', 
    flexDirection:'row',
  },
  Text:{
    fontSize:18,
    paddingVertical:8,
    paddingHorizontal:15
  },
  cizgi:{
     backgroundColor:'#ccc',
    height:1, marginHorizontal:50
  },
  picture:{
    borderRadius:20,
    width:40,
    height:40,
  }
})