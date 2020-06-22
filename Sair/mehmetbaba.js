import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import {Linking} from 'react-native';

const Mehmetbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=Tml-0E5qhMY");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
            <Text style={styles.Text} >Uyan</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=l_QtKg0vBBo");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
            <Text style={styles.Text} >Tükürün</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=twZMUhochlc");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
            <Text style={styles.Text} >Çanakkale Şehitlerine</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=oF120rBk4hY");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
            <Text style={styles.Text} >Bülbül</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=tX8TpnsceDI");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
            <Text style={styles.Text} >Zulmü Alkışlayamam</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=uCnTIg1um6k");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
            <Text style={styles.Text} >Müslümanlık Nerede</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
</ScrollView>
    </View>
  );
};

export default Mehmetbaba;

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