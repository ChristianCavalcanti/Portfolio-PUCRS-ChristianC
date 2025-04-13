import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogPost from './pages/post';
import Home from './pages/home';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Text style={styles.container}> Hello Testororororo</Text>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="BlogPost" component={BlogPost} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container:  {
    backgroundColor: '0F0'
  }

})