import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'

export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Input style={styles.element} placeholder="Email" label="Email" />
                <Input style={styles.element} placeholder="Full Name" label="Full Name" />
                <Input style={styles.element} placeholder="Password" label="Password" />
                <Input style={styles.element} placeholder="Confirm Password" label="Confirm Password" />
                <Button style={styles.element}>Register</Button>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {

    },
    element: {

    }
});