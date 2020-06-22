import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Cemalbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=bk94I6QQ5SE&list=PLltV1KEFoQI3wxZgZNNEF6LDizqu7NsWi");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Uzaktan Seviyorum Seni</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=y60RxYeIR5I");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Keşke Yalnız Bunun İçin Sevseydim Seni</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=z-yc7MmHhwY");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Sevmek Ne Uzun Kelime</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=QeILrUIfnqY");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Sana Giden Yollar Kapalı</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=PUJ4IGuHsBU");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >8:10 Vapuru</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=CUxYl42fFOg");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Sevgilim Ben Şimdi</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=6k78OQheW7I");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Aşk</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=ppU5Dcw_PMA");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Üvercinka</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=Us4-2QDFYj0");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
            <Text style={styles.Text} >Kadınlar Susarak Gider</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
</ScrollView>
    </View>
  );
};

export default Cemalbaba;

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