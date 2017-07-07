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
        const prepararAlimentos = (mesas) => {
            let alimentos: any[] = [];
            mesas.forEach(mesa => {
                mesa.orden.forEach(alimento => {
                    alimento.mesaKey = mesa.key;
                    alimentos.push(alimento);
                });
            });

            return alimentos;
        };
        const alimentosView = prepararAlimentos(params.mesas).map(alimento => {
            let key = '' + alimento.mesaKey + alimento.descripcion.replace(' ', '');
            return <View key={key}>
                    <Text>Mesa: {alimento.mesaKey}</Text>
                    <Text>Cantidad: {alimento.cantidad}</Text>
                    <Text>Descripcion: {alimento.descripcion}</Text>
                    <Text>----</Text>
                   </View>;
        });

        return (
            <View>
                <Text>Pendientes:</Text>
                {alimentosView}
            </View>
        );
    }
}
