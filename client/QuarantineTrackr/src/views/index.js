import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LogScreen from './main_screen/logview'
import CheckInScreen from './main_screen/checkin';

const Tab=createMaterialTopTabNavigator();

export default class Tabs extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tab.Navigator initialRouteName="Check">
                <Tab.Screen 
                    name="Log"
                    component={LogScreen}
                />
                <Tab.Screen 
                    name="Check"
                    component={CheckInScreen}
                />
            </Tab.Navigator>
        );
    }
}