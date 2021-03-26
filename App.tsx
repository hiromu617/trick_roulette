import React, { useState } from 'react';
import TopPage from './src/pages/topPage'
import RoulettePage from './src/pages/roulettePage'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Top"
        >
          <Stack.Screen
            name="Top"
            component={TopPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Roulette"
            component={RoulettePage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

