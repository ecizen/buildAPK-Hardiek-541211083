import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import gambar from './asset/daegun.jpg';
import UI from './asset/ui.png';
import User from './asset/Young_Boy.png';
import User1 from './asset/User_Experience.png';
import projek from './asset/Frame8.png'

export default function App() {
  return (

    <View style={styles.container}>
      <ScrollView>
      <View style={{alignItems: 'center',}}>
      <View style={styles.circle}>
        <Image source={gambar} style={styles.gmbr}>
        </Image>
      </View>
      <View style={{marginTop: 15}}>
      <Text style={styles.nama}>Hardiek Tatendra</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 12}}>
      <Text style={styles.role}>FRONTEND</Text>
      <Text style={styles.role1}>DEVELOPER</Text>
      </View>
      <View style={{marginTop: 20, padding: 10}}><Text style={{fontSize: 14, color: 'white', textAlign: 'center'}}>Perkenalkan nama saya Hardiek Tatendra saya lahir pada Mei 2005 di wonogiri .Saya saat ini memempuh pendidikan di smk telkom purwokerto. saya tertarik pada bidang pemmrograman dan desain uiux</Text></View>
      <View style={{width: '100%', height: 1, backgroundColor: '#383838', marginTop: 20}}></View>
      </View>
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Profil</Text>
        <ScrollView horizontal>
        <View style={{flexDirection: 'row',gap: 20, marginTop: 20}}>          
          <View style={styles.card1}><Image source={UI} style={styles.profil_img}></Image><Text>18 Years old</Text></View>
          <View style={styles.card1}><Image source={User} style={styles.profil_img}></Image><Text>Forntend</Text></View>
          <View style={styles.card2}><Image source={User1} style={styles.profil_img}></Image><Text>Frontend developer and UI/UX</Text></View>
        </View>
        </ScrollView>
        <View style={{marginTop: 30, gap: 20}}>
          <Text  style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Recent Project</Text>
          <View style={styles.projek}><Image source={projek} style={styles.projek_sty}></Image></View>
          <View style={styles.projek}><Image source={projek} style={styles.projek_sty}></Image></View>
          <View style={styles.projek}><Image source={projek} style={styles.projek_sty}></Image></View>
        </View>
      </View>
      </ScrollView>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    // alignItems: 'center',

  },
  gmbr:{
    width : 100,
    height: 100,
    borderRadius: 50,
  },
  circle:{
    marginTop: 98
  },
  nama:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  role:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  role1:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8F43EE'
  },
  card1:{
    justifyContent: 'center',
    padding: 5,
    width: 151,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  card2:{
    justifyContent: 'center',
    padding: 5,
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  profil_img:{
    width: 20,
    height: 20
  },
  projek:{
    width: 320,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  projek_sty:{
    width: 320,
    height: 300,
    borderRadius: 10

  }
});
