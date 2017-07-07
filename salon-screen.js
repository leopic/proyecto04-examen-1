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
        const { params } = this.props.navigation.state;
        const mesas = params.mesas;
        let mesasList = mesas.map(mesa => {
            return <Button onPress={() => navigate('Mesa', { mesa: mesa })} title={'' + mesa.key} key={mesa.key}/>
        });

        return (
            <View>
                <Text>Mesas:</Text>
                {mesasList}
            </View>
        );
    }
}
