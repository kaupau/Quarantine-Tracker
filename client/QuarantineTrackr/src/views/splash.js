import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.element}>Login</Button>
                <Button style={styles.element}>Register</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    element: {

    }
});