import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Canbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=V29zmDfK1ls");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Anladım</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=_BeBtizXorU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Bağlanmayacaksın</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=sRLdD63zZ9w");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Sebepsiz Sevmektir Aşk</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=6pVPr1A3Txk");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Kadın Dediğin</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=6pVPr1A3Txk");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Ben Hayatta En Çok Babamı Sevdim</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=wIav8XpQHLw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Her şey Sende Gizli</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=QVs1A0uNMtY");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Zamanı Geldiğinde</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=PK9RHSKSDiM");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Bir Kadını Ağlatmak</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=FTRBxzmMtGw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Unutma</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=GXC1SpMKcFQ");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
            <Text style={styles.Text} >Gitmek</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>

</ScrollView>
    </View>
  );
};

export default Canbaba;

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