import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View,ActivityIndicator} from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Stack = createStackNavigator();

 class globalSummary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
           loadingAPI:true,
            newConfirmed: null,
            totalConfirmed: null,
            newDeaths: null,
            totalDeaths: null,
            newRecovered: null,
            totalRecovered: null,
      };
    }
  
    
  
    getData() {
      return fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
            loadingAPI:false,
            newConfirmed: responseJson.Global.NewConfirmed,
            totalConfirmed: responseJson.Global.TotalConfirmed,
            newDeaths: responseJson.Global.NewDeaths,
            totalDeaths: responseJson.Global.TotalDeaths,
            newRecovered: responseJson.Global.NewRecovered,
            totalRecovered: responseJson.Global.TotalRecovered,
            },
         
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

    componentDidMount() {
      this.getData();
    }


    render() {
      if (this.state.loadingAPI==false) {

        return (
          <View style={styles.container}>
            <View>
            <View >
              <Text 
              style={styles.TopHeading}>
              Global Summary</Text>
            </View>
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> New Confirmed Cases : </Text>
            <Text style={styles.result}>{this.state.newConfirmed}</Text>
            </View>
      
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> Total Confirmed Cases : </Text>
            <Text style={styles.result}>{this.state.totalConfirmed}</Text>
            </View>
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> Total Deaths Cases : </Text>
            <Text style={styles.result}>{this.state.totalDeaths}</Text>
            </View>
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}>  New Recovered Cases : </Text>
            <Text style={styles.result}>{this.state.newRecovered}</Text>
            </View>
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> Total Recovered Cases  : </Text>
            <Text style={styles.result}>{this.state.totalRecovered}</Text>
            </View >
  
            </View>
          </View>
        );
      }
        else{
          return (
            <View style={styles.loadingStyle}>
              <ActivityIndicator size="large" />
              <Text style = {{textAlign:'center'}}>Loading Data...</Text>
            </View>
          );
        }
      
      }
  
  
    }
  

  const styles = StyleSheet.create({

    
      container : {
      flex : 1,
      justifyContent:'center',
      paddingTop:30,
      backgroundColor:"seashell",
  
      },

      loadingStyle:{ 
        flex: 1,
         padding: 20,
         justifyContent:"center" },

      TopHeading:{
          textAlign:'center',
          fontSize:30,
          fontWeight:'bold',
          textDecorationLine:"underline",
          paddingTop:20,
          marginBottom:40,
          
      },
      heading:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
       
        
      },
      result:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
       
      },

     viewstyle:{
       flexDirection:"row",
       justifyContent:"space-between",
       margin:10,
       borderBottomWidth: 2
      

       
     },

  });
  

const globalSummaryNavigator = () =>{
    return(
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
            name = "Global Summary"
            component = {globalSummary}/>
            
        </Stack.Navigator>
    );
}


  
export default globalSummaryNavigator;