import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SelectCountry from "../screens/screen1"
import CountryStatsScreen from "../screens/screen2";

const Stack = createStackNavigator();


const stackNavigator = () => {
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
      })}
    >
      <Stack.Screen
       name="COVID19 Statistics App"
       component={SelectCountry} 
        />

      <Stack.Screen 
      name="CountryStats" 
      component={CountryStatsScreen} 
      options={({navigation})=>({
        headerLeft:()=>
          (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons
                name="md-arrow-back"
                size={32}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
      })}/>
    </Stack.Navigator>
  );
};


export default stackNavigator;
