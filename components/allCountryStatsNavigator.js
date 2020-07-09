import * as React from "react";
import {createMaterialBottomTabNavigator,} from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import{View} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AsiaApi, SouthAmericaApi, NorthAmericaApi,AfricaApi,AustraliaApi,EuropeApi} from "../screens/screen4";

const Tab = createMaterialBottomTabNavigator();



const bottomTabs = () => {
  return (
    <Tab.Navigator 
    //initialRouteName="Asia"
    activeColor="white"
    inactiveColor="white"
    shifting={false}
    barStyle={{ backgroundColor: 'yellowgreen' }}
    >
      <Tab.Screen name="Asia" component={AsiaApi} />
      <Tab.Screen name="South" component={SouthAmericaApi} />
      <Tab.Screen name="North" component={NorthAmericaApi} />
      <Tab.Screen name="Europe" component={EuropeApi} />
      <Tab.Screen name="Australia" component={AustraliaApi} />
      <Tab.Screen name="Africa" component={AfricaApi} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();


const allCountryStatsNavigator = () => {
  return (
    <Stack.Navigator
    
      screenOptions={({ navigation }) => ({
        headerTitleStyle:{ color: 'white'},

        headerStyle:{
          backgroundColor:"yellowgreen",
        
      },
        headerLeft: () => (
          <View style={{ paddingLeft: 10 }}>
            <Ionicons name="md-menu" size={32} color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
        ),
      })
    
    }
    >
      <Stack.Screen
       name="All Country Stats"
       component={bottomTabs} 
  
  
        />
        </Stack.Navigator>
  )}
export default allCountryStatsNavigator;
