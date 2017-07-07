'use strict';

import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

export default class SalonScreen extends React.Component {
    static navigationOptions = {
        title: 'Salon',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Mesas:</Text>
                <Button onPress={() => navigate('Mesa', { id: 1 })} title="1"/>
                <Button onPress={() => navigate('Mesa', { id: 2 })} title="2"/>
                <Button onPress={() => navigate('Mesa', { id: 3 })} title="3"/>
                <Button onPress={() => navigate('Mesa', { id: 4 })} title="4"/>
                <Button onPress={() => navigate('Mesa', { id: 5 })} title="5"/>
            </View>
        );
    }
}
