import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ListItem, Badge, Divider, Text } from 'react-native-elements'

export default class LogScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View>
                <Text>Date</Text>
                <ListItem title="Log 1" badge={{ value: 3, status: "error" }}>   </ListItem>
                <ListItem title="Log 1" badge={{ value: 3, status: "error" }}>   </ListItem>
            </View>
        );
    }
}