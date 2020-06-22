import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Cahitbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=6krv_MMJ7gY");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Yaşamak</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=bA_EddygUh4");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Sevmek de Yorulur</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=t7Q0vu5K1I8");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Sultan</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=bsz39SyL0rU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Anılar Defterin de Gül Yaprağı</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=KfczBKkgnGk");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Kalsam</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=vW-IytjJVMU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Mavi Gök Orda mı?</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=_0m0FWfOmq8");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Serçekuş</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=mGDItZOhxyM");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Güzel Olan Her Şey Yarım Kalır</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=MVz73A2J9Kw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Güzelcin</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=igkRk4ME-1k");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
            <Text style={styles.Text} >Yanma</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
</ScrollView>
    </View>
  );
};

export default Cahitbaba;

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