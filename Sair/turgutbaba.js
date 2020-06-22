import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Turgutbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=xbdN_DSm0bs");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Palyaço</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=Dfn2qSGT3xg&t=280s");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Göğe Bakma Durağı</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=1l_tLrr0DS8");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Acıyor</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=puLIUFwICMU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Bir Gün Sabah Sabah</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=NkJl0NfMmdE");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Kırlardan Geliyorlar</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=IZqkl1tCiLw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Arz-ı Hal</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=rcT_j2syA4M");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Geyikli Gece</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=k5mg2nUSyLU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Tomris</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=xzM0wTzD1vI");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Umuttur</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=zOLVeQymU30");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Uzak Kaderler İçin</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=uY1mzSbn1VE");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
            <Text style={styles.Text} >Denge</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
</ScrollView>
    </View>
  );
};

export default Turgutbaba;

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