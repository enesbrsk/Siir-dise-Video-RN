import * as React from 'react';
import { View, Text,TouchableOpacity ,StyleSheet,ScrollView ,Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Atillababa from '../Sair/atillababa';
import Nazimbaba from '../Sair/nazimbaba';
import Umitbaba from '../Sair/umitbaba';
import Ahmetbaba from '../Sair/ahmetbaba';
import Necipbaba from '../Sair/necipbaba';
import Canbaba from '../Sair/canbaba';
import Ahmedbaba from '../Sair/ahmedbaba';
import Mehmetbaba from '../Sair/mehmetbaba';
import Yahyababa from '../Sair/yahyababa';
import Cemalbaba from '../Sair/cemalbaba';
import Cahitbaba from '../Sair/cahitbaba';
import Turgutbaba from '../Sair/turgutbaba';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Gorsel from '../Sair/gorsel';
import Ayarlar from '../Sair/ayarlar';

const deneme = ({navigation}) => {
  return (
  <View style={styles.container}>
    <ScrollView>
    <TouchableOpacity onPress={() => navigation.navigate('Atilla')}
    style={styles.Button}>
      <Image
        style={styles.picture}
       source = {require('../picture/atilla.jpg')} />
    <Text style={styles.text} >Atilla İlhan</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Nazim')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/nazim.jpg')} />
    <Text style={styles.text} >Nazım Hikmet</Text>
    </TouchableOpacity>   
    <TouchableOpacity onPress={() => navigation.navigate('Ümit')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/umit.png')} />
    <Text style={styles.text} >Ümit Yaşar Oğuzcan</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('AhmetT')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/ahmet.jpg')} />
    <Text style={styles.text} >Ahmet Telli</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Necip')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/necip.jpg')} />
    <Text style={styles.text} >Necip Fazıl Kısakürek</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Can')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/can.jpg')} />
    <Text style={styles.text} >Can Yücel</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('AhmedA')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/ahmed.jpg')} />
    <Text style={styles.text} >Ahmed Arif</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('MehmetA')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/mehmet.jpg')} />
    <Text style={styles.text} >Mehmet Akif Ersoy</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Yahya')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/yahya.jpg')} />
    <Text style={styles.text} >Yahya Kemal Beyatlı</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Cemal')}
    style={styles.Button}>
   <Image
        style={styles.picture}
       source = {require('../picture/cemal.jpg')} />
    <Text style={styles.text} >Cemal Süreya</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Cahit')}
    style={styles.Button}>
    <Image
        style={styles.picture}
       source = {require('../picture/cahit.jpg')} />
    <Text style={styles.text} >Cahit Zarifoğlu</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Turgut')}
    style={styles.Button}>
       <Image
        style={styles.picture}
       source = {require('../picture/turgut.jpg')} />
    <Text style={styles.text} >Turgut Uyar</Text>
    </TouchableOpacity>
    </ScrollView>
 </View>
);
};

const Atilla = () => {
  return (
    <View style={{flex: 1}}>
      <Atillababa />

    </View>
);
};

const Nazim = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Nazimbaba />

  </View>
);
};
const Ümit = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Umitbaba />

  </View>
    );
};
const AhmetT = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Ahmetbaba />

  </View>
);
};
const Necip = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Necipbaba />

  </View>
);
};
const Can = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Canbaba />

  </View>
);
};
const AhmedA = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Ahmedbaba />
  </View>
);
};
const MehmetA = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Mehmetbaba />
  </View>
);
};
const Yahya = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Yahyababa />
  </View>
);
};
const Cemal = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Cemalbaba />
  </View>
);
};
const Cahit = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Cahitbaba />
  </View>
);
};
const Turgut = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Turgutbaba />
  </View>
);
};
const Settings = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Ayarlar />
  </View>
);
};
const Picture = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <Gorsel />
  </View>
);};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 48, height: 48 }}
      source={require('../picture/book.png')}
    />
  );
}

const App = () => {
  return (
      <Stack.Navigator initialRouteName="App"  
      screenOptions={{ headerTitle: props => <LogoTitle {...props}  />,headerTitleAlign:'center' ,
       headerRight: () => (
        <TouchableOpacity onPress={() => alert('This is a button!')} >
           <Image
        style={styles.picture}
       source = {require('../picture/adv.png')} />
          </TouchableOpacity>
      ),
    }}>
      
       <Tab.Screen name="Home" component={deneme}  />
        <Tab.Screen name="Ayarlar" component={Settings} />
        <Stack.Screen name="Görseller" component={Picture} />
        <Stack.Screen name="Atilla" component={Atilla} />
        <Stack.Screen name="Nazim" component={Nazim} />
        <Stack.Screen name="Ümit" component={Ümit} />
        <Stack.Screen name="AhmetT" component={AhmetT} />
        <Stack.Screen name="Necip" component={Necip} />
        <Stack.Screen name="Can" component={Can} />
        <Stack.Screen name="AhmedA" component={AhmedA} />
        <Stack.Screen name="MehmetA" component={MehmetA} />
        <Stack.Screen name="Yahya" component={Yahya} />
        <Stack.Screen name="Cemal" component={Cemal} />
        <Stack.Screen name="Cahit" component={Cahit} />
        <Stack.Screen name="Turgut" component={Turgut} />
      </Stack.Navigator>
  );
}
const Home = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="App">
    <Tab.Screen name="Görseller" component={Picture} 
    options={{
      tabBarLabel: 'Görseller',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="google-photos" color={color} size={28} />
      ),
    }} />
    <Tab.Screen name="Ana Sayfa" component={App} 
      options={{
      tabBarLabel: 'Ana Sayfa',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={28} />
      ),
    }} />
    <Tab.Screen name="Ayarlar" component={Settings} 
      options={{
      tabBarLabel: 'Hakkında',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="settings" color={color} size={28} />
      ),
    }} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Home;
const styles = StyleSheet.create({
  container:{
    borderRadius:5,
    flexDirection : 'column',
    elevation:3,
    flex:1,
    backgroundColor:'#fff',
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    marginHorizontal:5,
    marginVertical:5,
  },
  Button:{
    marginTop:10,

     paddingHorizontal:10,
    paddingVertical:14,
    fontSize:22,
    borderRadius:6,       
    elevation:3,     
    backgroundColor:'#f9f9f9',
    shadowOffset:{width:1,height:1 },
    shadowColor:'#333',
    shadowOpacity:0.5,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:5,
    flexDirection:'row'
  },
  picture:{
    borderRadius:20,
    width:40,
    height:40,
    
  },
  text:{
    marginHorizontal:15,
    marginVertical:7,
    fontSize:18
  }
})