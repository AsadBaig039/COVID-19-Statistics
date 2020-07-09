
import * as React from "react";
import { Text,StyleSheet,View, ActivityIndicator,FlatList,TouchableOpacity,} from "react-native";
import { TextInput } from "react-native-paper";

export default class CountrySelection extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        loadingAPI: true, 
        //search: null,
        data:[],
        dataHandler:[]
     
      };
    };

   

    inputCountry=()=>{
      return <TextInput 
      //style={{backgroundColor:"grey"}}
      placeholder="Enter Country name here"
       onChangeText={text=> this.inputTextHandler(text)}
       />;
    }

    inputTextHandler = input => {
      this.setState({ input }, () => {
          if (input=="") {
              this.setState({
                  dataHandler: [...this.state.data]
              });
              return;
          }    
          this.state.dataHandler = this.state.data.filter(function(item){
              return item.Country.includes(input);
            }).map(function({Country,Slug,ISO2}){
              return{Country,Slug,ISO2}
            })
      });
  };
  
   
  
    APIData() {
      return fetch('https://api.covid19api.com/countries')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              loadingAPI: false,
              data:responseJson,
              dataHandler: responseJson,
            },
           
          );
        })
        .catch(error => {
          console.error(error);
        });
    }



componentDidMount=()=>
{
 this.APIData();
}



    render() {
      if (this.state.loadingAPI==false) {
        return (
          <View style={{ paddingTop: 5 }}>
            
            <FlatList
              ListHeaderComponent={this.inputCountry}
              ListEmptyComponent={() => (
                    <Text
                     style={{fontSize: 20,textAlign:'center'}}>
                       Invalid Input
                       </Text>
              )}
  
              data={this.state.dataHandler}
              renderItem={({ item ,index}) => (
                <TouchableOpacity
                  key = {index}
                  activeOpacity={0.5}
                  onPress={() =>
              
                    this.props.navigation.navigate("CountryStats",{slug:item.Slug})
                  }
                  >
                  <View style={styles.countrydisplayContainer}>
                    <View >
                      <Text style={{fontSize:18}}>{item.Country}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            
            />
        
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
    countrydisplayContainer: {
      flex: 1,
      flexDirection: 'row',
      padding:5,
      paddingBottom:10,
      backgroundColor:'seashell',
      borderBottomWidth: 2  
      
    },
    loadingStyle:{ 
      flex: 1,
       padding: 20,
       justifyContent:"center" }
  });
  