'use strict';

import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

export default class IntermedioScreen extends React.Component {
    static navigationOptions = {
        title: 'Seleccione',
    };
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Total de mesas: {params.mesas.length}</Text>
                <Button onPress={() => navigate('Salon', {mesas: params.mesas})} title="Salon"/>
                <Button onPress={() => navigate('Cocina', {mesas: params.mesas})} title="Cocina"/>
            </View>
        );
    }
}
