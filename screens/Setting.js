
import { TouchableOpacity,StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React,{useState ,useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'



 function Setting(){
  return (
    <View style={styles.MainContainer}>
            <View style={{marginLeft: 5, marginTop: 5}}>
            </View>
            <View style={styles.MainDataContainer}>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Name: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>SWapnil shetkar</Text></View>
                </View>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Age: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>20</Text></View>
                </View>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Gender: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>M</Text></View>
                </View>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Batch: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>computer</Text></View>
                </View>
            </View>
        </View>
  );
}

export default Setting

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#a7ffeb",
    height: 650,
},
MainDataContainer: {
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},
DataBlocks: {
    display: "flex",
    flexDirection: "row",
    width: 300,
},
  Emailinput:{
    position:'absolute',
    top:550,
    left:99,
    flexDirection:'row',
    flex:4
    
    
  },
  Passwordinput:{
    position:'absolute',
    top:600,
    right:60,
    flexDirection:'row',
  },
  image:{
    backgroundColor:'pink',
    height:"400%",
    width:"00%",
    opacity:20
  },
  pos:{
    position:'absolute',
    top:200,
    left:20,
    flexDirection:'column' 
  },
 Loginbutton:{
    position:'absolute',
    top:690,
    left:190,
    

  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "skyblue",
    position:'absolute',
    top:200,
    left:365,
    
  },
  Registerbutton:{
    position:'absolute',
    top:750,
    left:165,
    flexDirection:'row' 
    
  },
  signIn: {
    width: '10%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 13,
    fontWeight: 'bold'
}

});
