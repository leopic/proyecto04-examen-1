'use strict';

import React from 'react';
import {
    Button,
    View
} from 'react-native';

export default class IntermedioScreen extends React.Component {
    static navigationOptions = {
        title: 'Seleccione',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button onPress={() => navigate('Salon')} title="Salon"/>
                <Button onPress={() => navigate('Cocina')} title="Cocina"/>
            </View>
        );
    }
}
