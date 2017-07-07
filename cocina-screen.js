'use strict';

import React from 'react';
import {
    Text,
    View
} from 'react-native';

export default class CocinaScreen extends React.Component {
    static navigationOptions = {
        title: 'Cocina',
    };
    render() {
        const { params } = this.props.navigation.state;

        return (
            <View>
                <Text>Pendientes:</Text>
                <Text>Total de mesas: {params.mesas.length}</Text>
            </View>
        );
    }
}
