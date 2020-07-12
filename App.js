import React, {Component} from 'react';
import {View,Text,Alert} from "react-native";
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';



class App extends Component {
    constructor() {
        super();
        this.state={
            YourLocation:'...'
        }
    }
    componentDidMount() {
        this.RequestPermission();
    }

    RequestPermission=()=> {
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((results)=>{
            if (results==RESULTS.GRANTED)
            {
                Alert.alert("Save permission");
                this.GetLocation();
            }
        })


    }
    render() {
        return (
            <View style={{margin:10}}>
              <Text style={{padding:10,fontSize:20}}>
                  Location: {this.state.YourLocation}
              </Text>

            </View>
        );
    }

    GetLocation=()=> {
        Geolocation.getCurrentPosition((position)=>{
            this.setState({YourLocation:JSON.stringify(position)})
        });

    }
}

export default App;
