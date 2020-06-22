import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import { Row } from 'native-base';
import {Linking} from 'react-native';

const Umitbaba= () => {
  return (
    <View style={styles.container}>
      <ScrollView>
    <TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=rDiIEAq1eDg&list=PLtPCQIXDytI6vLIh2j9kK-HAAh6tEQ2Ci");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Alışkanlık</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=NuXEMf2ld7A&list=PLtPCQIXDytI6vLIh2j9kK-HAAh6tEQ2Ci&index=2");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Ben Senin En Çok</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=rpP8BL5Xkc0&list=PLtPCQIXDytI6vLIh2j9kK-HAAh6tEQ2Ci&index=3");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Milyon Kere Ayten</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=36tnp2POLmk&list=PLtPCQIXDytI6vLIh2j9kK-HAAh6tEQ2Ci&index=5");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Çaresizlik Şiiri</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=8dAr0NFH130&list=PLtPCQIXDytI6vLIh2j9kK-HAAh6tEQ2Ci&index=6");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Beni Unutma</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=K_MfUL3zXxk");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Kader Kapıyı Çalıyor</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=Gafv0S0RhB0");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Seninle Kardeş Değiliz</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=bYwOGVeyV_g");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Ayrılık Diye Bir Şey Yok</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>
<TouchableOpacity style={styles.Button} onPress={
      ()=>{
          Linking.openURL("https://www.youtube.com/watch?v=bYwOGVeyV_g");  
    } }
   >
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
            <Text style={styles.Text} >Bir Gün Anlarsın</Text>
        </TouchableOpacity>
<View style={styles.cizgi}></View>


</ScrollView>
    </View>
  );
};

export default Umitbaba;

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