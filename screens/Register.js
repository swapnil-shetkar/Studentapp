import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import COLORS from '../src/colors';
import Input from '../src/components/input';
import Button from '../src/components/button';
import Ionicons from '@expo/vector-icons/Ionicons';
import React ,{useState} from 'react';
import { auth } from '../firebase'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 35, fontWeight: 'bold'}}>
          Student Registration
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            value={email}
            onChangeText={text => setEmail(text)} 
          />
        
          <Input
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            keyboardType="numeric"
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
          />
          <Input
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Register"  onPress={handleSignUp} />
          <Text
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
}
export default Register;


