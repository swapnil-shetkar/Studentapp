
import { Image,StyleSheet,Button, Text, View,TextInput,TouchableOpacity,ImageBackground } from 'react-native';
import React from 'react';
import Register from './Register';
import Login from './Login';

export default function HomeStack({navigation}) {
  return (
  <View >
      <View>
    <ImageBackground source={require('../assets/Background.jpg')} style={{top:50,width:360,height:300}}>
    </ImageBackground>
</View>
<View>
<Image style={{ position:'absolute' ,top:20, left:0,width:'100%',height:260}}
          source={require('../assets/FlexSlider.jpg')} />
</View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:50,
   
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  tbutton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  sj:{
    position:'absolute',
    top:200,
    left:20,
    
    
    
  },
  loginbt:{
    justifyContent:'space-around',
    flexDirection:'column',
    position:'absolute',
    top:500,
    right:10,
    flexDirection:'row',
    padding:20
    
  },

  anything:{
    position:'absolute',
    top:440,
    right:5,
    flexDirection:'row',
    padding:20
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42
  },
  image:{
    backgroundColor:'pink',
    height:"500%",
    width:"500%",
    opacity:20
  },
  image2:{
    backgroundColor:'red',
    height:"50%",
    width:"50%",
    justifyContent:'center'

  }

});

