import React, { useState } from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  TrxInfo  from './src/TrxInfo';
import  TrxSummary  from './src/TrxSummary';
import TrxList from './src/TrxList'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  let trxns = [
    { "id": "1", "name": "Coffee Bean", "price": 850, "addr": "Los Angeles, CA", "time": "2023-08-15" },
    { "id": "3", "name": "Café Central", "price": 1200, "addr": "Madrid, Spain", "time": "2023-06-28" },
    { "id": "4", "name": "Espresso Italia", "price": 950, "addr": "Rome, Italy", "time": "2023-09-10" },
    { "id": "5", "name": "Brewed Awakening", "price": 1100, "addr": "Vancouver, BC", "time": "2023-07-20" },
    { "id": "6", "name": "Mocha Magic", "price": 800, "addr": "New York City, NY", "time": "2023-10-05" }
  ]
  

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transactions">
          {() => <Stack.Navigator>
          <Stack.Screen name="List">
            {props => <TrxList {...props} trxns={trxns}/>}
          </Stack.Screen>
          <Stack.Screen name="Info" component={TrxInfo} />
        </Stack.Navigator>}
        </Tab.Screen>
        <Tab.Screen name="Summary">
          {() => <TrxSummary trxns={trxns} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


