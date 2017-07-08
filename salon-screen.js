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
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        const mesas = params.mesas;
        let mesasList = mesas.map(mesa => {
            return <TouchableOpacity key={mesa.key}
                                     style={{
                                         width: '30%',
                                         marginBottom: 8
                                     }}
                                     onPress={() => {
                                         navigate('Mesa', {
                                             mesa: mesa,
                                             agregarAlimentoAMesa: params.agregarAlimentoAMesa,
                                             removerAlimentoDeMesa: params.removerAlimentoDeMesa
                                         })
                                     } }>
                <Text style={{
                    height: 88,
                    width: '100%',
                    lineHeight: 88,
                    textAlign: 'center',
                    fontSize: 16,
                    backgroundColor: 'rgb(50, 70, 255)',
                    fontWeight: 'bold',
                    color: '#fff'
                }}>#{mesa.key}</Text>
            </TouchableOpacity>;
        });

        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    padding: 16,
                }}>{mesasList}</View>
            </View>
        );
    }
}
