import React, { useEffect, useState, } from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timer from '../screens/homeScreen/Timer';

const Stack = createNativeStackNavigator();

function Route(props) {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Timer" component={Timer} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;