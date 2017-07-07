'use strict';

import React from 'react';
import {
    TouchableOpacity,
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
            return <TouchableOpacity key={mesa.key}
                onPress={() => { navigate('Mesa', {
                    mesa: mesa,
                    agregarAlimentoAMesa: params.agregarAlimentoAMesa,
                    removerAlimentoDeMesa: params.removerAlimentoDeMesa
                }) }}>
                <Text style={{
                    height: 50,
                    width: 50,
                    lineHeight: 50,
                    textAlign: 'center',
                    margin: 16,
                    marginBottom: 8,
                    fontSize: 16,
                    backgroundColor: 'rgb(50, 70, 255)',
                    fontWeight: 'bold',
                    color: '#fff'
                }}>{mesa.key}</Text>
            </TouchableOpacity>;
        });

        return (
            <View>
                <Text style={{
                    margin: 16,
                    marginBottom: 0,
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Total de mesas: {mesas.length}</Text>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>{mesasList}</View>
            </View>
        );
    }
}
