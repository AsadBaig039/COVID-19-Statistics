import * as React from "react";
import { Text,StyleSheet,View, ActivityIndicator,FlatList,TouchableOpacity,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export class AsiaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        loadingAPI: true, 
        apiData:[],
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/asia')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI: false,
              apiData:responseJson,
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

     render() {
      if (this.state.loadingAPI==false) {

        return (
        
            
            <ScrollView>
              {
                this.state.apiData.countries.map((item,index)=>
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  >
                    <View>

                    
                  <View style={styles.countrydisplayContainer}>
                    
                      <Text style={styles.countryName}>{item.name}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Cases :</Text>
                      <Text style={styles.result}>{item.cases}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Deaths :</Text>
                      <Text style={styles.result}>{item.deaths}</Text>
                      </View>
                     
                      
                    
                 
                  </View>
                </TouchableOpacity>

                )}
            </ScrollView>
          
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

  export class SouthAmericaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        loadingAPI: true, 
        apiData:[],
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/south')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI: false,
              apiData:responseJson,
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

     render() {
      if (this.state.loadingAPI==false) {

        return (
        
            
            <ScrollView>
              {
                this.state.apiData.countries.map((item,index)=>
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  >
                    <View>

                    
                  <View style={styles.countrydisplayContainer}>
                    
                      <Text style={styles.countryName}>{item.name}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Cases :</Text>
                      <Text style={styles.result}>{item.cases}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Deaths :</Text>
                      <Text style={styles.result}>{item.deaths}</Text>
                      </View>
                     
                      
                    
                 
                  </View>
                </TouchableOpacity>

                )}
            </ScrollView>
          
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

  export class NorthAmericaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        loadingAPI: true, 
        apiData:[],
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/north')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI: false,
              apiData:responseJson,
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

     render() {
      if (this.state.loadingAPI==false) {

        return (
        
            
            <ScrollView>
              {
                this.state.apiData.countries.map((item,index)=>
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  >
                    <View>

                    
                  <View style={styles.countrydisplayContainer}>
                    
                      <Text style={styles.countryName}>{item.name}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Cases :</Text>
                      <Text style={styles.result}>{item.cases}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Deaths :</Text>
                      <Text style={styles.result}>{item.deaths}</Text>
                      </View>
                     
                      
                    
                 
                  </View>
                </TouchableOpacity>

                )}
            </ScrollView>
          
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

  export class AustraliaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        loadingAPI: true, 
        apiData:[],
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/australia')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI: false,
              apiData:responseJson,
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

     render() {
      if (this.state.loadingAPI==false) {

        return (
        
            
            <ScrollView>
              {
                this.state.apiData.countries.map((item,index)=>
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  >
                    <View>

                    
                  <View style={styles.countrydisplayContainer}>
                    
                      <Text style={styles.countryName}>{item.name}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Cases :</Text>
                      <Text style={styles.result}>{item.cases}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Deaths :</Text>
                      <Text style={styles.result}>{item.deaths}</Text>
                      </View>
                     
                      
                    
                 
                  </View>
                </TouchableOpacity>

                )}
            </ScrollView>
          
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

  
  export class AfricaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        loadingAPI: true, 
        apiData:[],
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/africa')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI: false,
              apiData:responseJson,
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

     render() {
      if (this.state.loadingAPI==false) {

        return (
        
            
            <ScrollView>
              {
                this.state.apiData.countries.map((item,index)=>
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  >
                    <View>

                    
                  <View style={styles.countrydisplayContainer}>
                    
                      <Text style={styles.countryName}>{item.name}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Cases :</Text>
                      <Text style={styles.result}>{item.cases}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Deaths :</Text>
                      <Text style={styles.result}>{item.deaths}</Text>
                      </View>
                     
                      
                    
                 
                  </View>
                </TouchableOpacity>

                )}
            </ScrollView>
          
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

  
  export class EuropeApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        loadingAPI: true, 
        apiData:[],
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/europe')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI: false,
              apiData:responseJson,
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

     render() {
      if (this.state.loadingAPI==false) {

        return (
        
            
            <ScrollView>
              {
                this.state.apiData.countries.map((item,index)=>
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  >
                    <View>

                    
                  <View style={styles.countrydisplayContainer}>
                    
                      <Text style={styles.countryName}>{item.name}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Cases :</Text>
                      <Text style={styles.result}>{item.cases}</Text>
                      </View>
                      <View style={styles.viewstyle}>
                      <Text style={styles.heading}>Total No of Deaths :</Text>
                      <Text style={styles.result}>{item.deaths}</Text>
                      </View>
                     
                      
                    
                 
                  </View>
                </TouchableOpacity>

                )}
            </ScrollView>
          
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
    countrydisplayContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor:'skyblue',
      borderBottomWidth: 1  ,
      justifyContent:'center'
      
    },
    loadingStyle:{ 
      flex: 1,
       padding: 20,
       justifyContent:"center" },

    countryName:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        textDecorationLine:"underline",
        padding:5,
        
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