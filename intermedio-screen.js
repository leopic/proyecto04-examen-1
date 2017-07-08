'use strict';

import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class IntermedioScreen extends React.Component {
    static navigationOptions = {
        title: 'Seleccione',
    };

    render() {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        return (
            <View style={{height: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigate('Salon', {
                    mesas: params.mesas,
                    agregarAlimentoAMesa: params.agregarAlimentoAMesa,
                    removerAlimentoDeMesa: params.removerAlimentoDeMesa
                })} style={{
                    flexGrow: 1
                }}>
                    <Text style={{
                        backgroundColor: 'rgb(0, 0, 255)',
                        color: '#fff',
                        fontWeight: 'bold',
                        height: 44,
                        margin: 16,
                        lineHeight: 44,
                        textAlign: 'center',
                    }}>SALON</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('Cocina', {
                    mesas: params.mesas,
                    removerAlimentoDeMesa: params.removerAlimentoDeMesa
                })} style={{
                    flexGrow: 1,
                }}>
                    <Text style={{
                        backgroundColor: 'rgb(0, 0, 255)',
                        color: '#fff',
                        fontWeight: 'bold',
                        height: 44,
                        margin: 16,
                        lineHeight: 44,
                        textAlign: 'center',
                    }}>COCINA</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
