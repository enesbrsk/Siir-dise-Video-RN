import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Ahmedbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=6DaNaEh7-Pg&list=PLMW5QrV3FpgjOGHQjKGTfU2gcb0X8N0Zj");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >33 Kurşun</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=JqBV2TkiHEA");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Hani Kurşun Sıksan Geçmez Geceden</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=xN_1GP54bBI");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Anadolu</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=uIsSAmb5KaI");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Hasretinden Prangalar Eskittim</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=nMGzojfmo5w");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Suskun</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=dbxr7DSqRsw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Unutamadığım</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=LC339IdKYH0");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Ay Karanlık</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=rqb852dnyzs");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Tutuklu</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=MhTtUDL-X-I");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
            <Text style={styles.Text} >Haberin Var mı Taş Duvar</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>

</ScrollView>
    </View>
  );
};

export default Ahmedbaba;

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