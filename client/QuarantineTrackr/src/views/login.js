import React from 'react'
import { Button, Input } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

import { RNCamera } from 'react-native-camera';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Input style={styles.element} placeholder="Email" label="Email" />
                <Input style={styles.element} placeholder="Password" label="Password" />
                <RNCamera/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    element: {

    }
})