import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Ahmetbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=1G_5kZ2NCwE&list=PLF71B90C4CDE232F6");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Gidersen Yıkılır Bu Kent</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=MdNYNPrt6VE&list=PLF71B90C4CDE232F6&index=4");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Aşklar mı ?</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=-aC_eJJcfTg&list=PLF71B90C4CDE232F6&index=5");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Bu Yağmurlar Seni</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=mqG2XY4jLKg&list=PLF71B90C4CDE232F6&index=7");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Çocuksun Sen</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=ot9zY1yWVig&list=PLF71B90C4CDE232F6&index=8");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Aşk Bitti</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=taArcxl52xc&list=PLF71B90C4CDE232F6&index=10");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Karda İzler</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=vAKekOUkrVo");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Su Çürüdü</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=nJ0RjIN7BVw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Belki Yine Gelirim</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=RgCj0noDWfw");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Gülüşün Kalır</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=4bXjt7ZjMQ0");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Ömrüm Diyorum</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=VVEqCwkLuts");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
            <Text style={styles.Text} >Hâlâ Koynumda Resmin</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>



</ScrollView>
    </View>
  );
};

export default Ahmetbaba;

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