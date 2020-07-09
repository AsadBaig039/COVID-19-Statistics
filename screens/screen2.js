
import * as React from "react";
import { Text,StyleSheet,View, ActivityIndicator} from "react-native";




export default class CountryStatsScreen extends React.Component {
    constructor(props) {
      super(props);
      const slug = this.props.route.params;
      this.state = { 
        loadingAPI : true,

        countrySlug: slug,

        selectedCountryName: null,
        firstDayCasesCount: null,
        firstCaseReportedDate: null,

        totalConfirmedCases: null,
        deathsCases: null,
        recoveredCases: null,
        activeCases: null,
      };
    }
  
    
  
    getFirstDayData() {
      const slug = this.state.countrySlug.slug;
      
      return fetch('https://api.covid19api.com/dayone/country/' + slug + '/status/confirmed')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI:false,
              firstDayCasesCount: responseJson[0].Cases,
              selectedCountryName: responseJson[0].Country,
              firstCaseReportedDate: responseJson[0].Date.slice(0,10),
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
    getData() {
      const slug = this.state.countrySlug.slug
      return fetch('https://api.covid19api.com/country/' + slug)
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
                    loadingAPI:false,
                    totalConfirmedCases: responseJson[Object.keys(responseJson).length - 1].Confirmed,
                    deathsCases: responseJson[Object.keys(responseJson).length - 1].Deaths,
                    recoveredCases: responseJson[Object.keys(responseJson).length - 1].Recovered,
                    activeCases: responseJson[Object.keys(responseJson).length - 1].Active
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

    componentDidMount() {
      this.getFirstDayData();
      this.getData();
    }

    render() {
      if (this.state.loadingAPI==false) {

        return (
          <View style={styles.container}>
  
            <View >
              <Text 
              style={styles.countryName}>
              {this.state.selectedCountryName}</Text>
            </View>
  
            <View style={styles.viewstyle}>
              <Text style={styles.heading}> First day cases  : </Text>
            <Text style={styles.result}>{this.state.firstDayCasesCount}</Text>
            </View>
      
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> First case report date  : </Text>
            <Text style={styles.result}>{this.state.firstCaseReportedDate}</Text>
            </View>
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> Total Confirmed Cases  : </Text>
            <Text style={styles.result}>{this.state.totalConfirmedCases}</Text>
            </View>
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}>  Total Confirmed Deaths : </Text>
            <Text style={styles.result}>{this.state.deathsCases}</Text>
            </View>
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> Total Recovered Cases  : </Text>
            <Text style={styles.result}>{this.state.recoveredCases}</Text>
            </View >
  
            <View style={styles.viewstyle}>
            <Text style={styles.heading}> Total Active Cases  : </Text>
            <Text style={styles.result}>{this.state.activeCases}</Text>
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

      countryName:{
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
  