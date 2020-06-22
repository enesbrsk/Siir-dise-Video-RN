import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Necipbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=LJVtV6MJqwA");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Aynalar</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=66AXg8hmNhU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Kaldırımlar</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=5fPI4CLnzao");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Ölüm Güzel Şey</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=vqG30NPZda0");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Sakarya Türküsü</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=gsanur21f5E");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Bir Gençlik!</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=4IojxR2Vf10");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Uyumak İstiyorum</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=zfhdbKg5CM4");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Canım İstanbul</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=9KxIpRTag1Y");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Utansın</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=TmPstir0L34");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
            <Text style={styles.Text} >Sabır</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>

</ScrollView>
    </View>
  );
};

export default Necipbaba;

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