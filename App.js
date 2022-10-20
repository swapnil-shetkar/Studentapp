import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Register from "./screens/Register";
import HomeStack from './screens/homeStack';
import Login from './screens/Login';
import Profile from './screens/Profile';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();
export function TabNavigator(){
  return(   
     <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
          
        if (route.name === 'HomeStack') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'cog' : 'cog';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen options={{ headerShown: false }} name="HomeStack" component={HomeStack} />
    <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
  </Tab.Navigator>
  )
}
 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen options = {{headerShown: false }} name='Login' component={Login}/>
    <Stack.Screen options = {{headerShown: false }} name='Register' component={Register}/>
    <Stack.Screen options={{ headerShown: false }} name='HomeStack' component={TabNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App ;

