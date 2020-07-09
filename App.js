import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import stackNavigator from "./components/startScreen";
import globalSummaryScreen from "./screens/screen3";
import allCountryStatsNavigator from "./components/allCountryStatsNavigator";
import {Ionicons} from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const MyDrawer = () =>{
  return(
   <Drawer.Navigator
   drawerContentOptions={{
    activeTintColor: 'green',
    itemStyle: { marginVertical: 20 }
  }}
  drawerStyle={{
    backgroundColor: 'white',
    paddingTop:40
  }}
   >
    
       <Drawer.Screen 
           name = "Countries" 
           component={stackNavigator}
           options={{
               drawerIcon:()=> <Ionicons name="md-flag" size={30} color="black" />
           }}
       />
       <Drawer.Screen 
           name = "Global Summary" 
           component={globalSummaryScreen}
           options={{
               drawerIcon:()=> <Ionicons name="md-stats" size={30} color="black" />
           }}
          />
       <Drawer.Screen 
           name = "All Country Stats" 
           component={allCountryStatsNavigator}
           options={{
               drawerIcon:()=> <Ionicons name="md-globe" size={24} color="black" />
           }}
           />
   </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer  
    >
      <MyDrawer/>
      
    </NavigationContainer>
  );
}

export default App;