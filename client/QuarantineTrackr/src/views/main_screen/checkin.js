import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';


export default class CheckInScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back,
    }
    
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }

    render() {
        const { hasPermission } = this.state
        if (hasPermission === null) {
          return <View />; // set some sort of a loading state here
        } 
        else if (hasPermission === false) {
          return <Text>No access to camera</Text>; 
        } 
        else {
          return (
            <View style={{ flex: .75 }}>
                <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front}>
                <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:20}}>
                    <TouchableOpacity>
                        <Icon name='camera'/>
                    </TouchableOpacity>
                </View>
                </Camera>
            </View>
          );
        }
    }
}