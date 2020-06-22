import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Yahyababa= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=aFSIYkNk3UI");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >Vuslat</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=ALkZGCQnFpw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >O Rüzgar</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=VKG9kjSr7kA");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >Akıncılar</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=UF3Ttvp5qlU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >Açık Deniz</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=UH7j8tRSMdY");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >Sessiz Gemi</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=Jww4LLnmNn4");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >Sonbahar</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=gBjrZKlgPyM");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >İstanbul</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=fCwmQ30AxhE");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
            <Text style={styles.Text} >Dönülmez Akşamın Ufkundayız</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
</ScrollView>
    </View>
  );
};

export default Yahyababa;

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