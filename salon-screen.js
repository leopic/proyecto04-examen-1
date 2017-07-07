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
    mesas = [
        {id: 1, orden: []},
        {id: 2, orden: []},
        {id: 3, orden: [
            {tipo: "Plato principal", cantidad: 3, descripcion: "Pescado a la plancha"},
            {tipo: "Postre", cantidad: 2, descripcion: "Tres leches"},
            {tipo: "Plato principal", cantidad: 1, descripcion: "Cordon Blue"},
            {tipo: "Bebida", cantidad: 3, descripcion: "Margarita"},
        ]},
        {id: 4, orden: [
            {tipo: "Postre", cantidad: 2, descripcion: "Pie limon"},
        ]},
        {id: 5, orden: []},
    ];

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Mesas:</Text>
                {/* TODO: Iterar sobre this.mesas */}
                <Button onPress={() => navigate('Mesa', { id: 1 })} title="1"/>
                <Button onPress={() => navigate('Mesa', { id: 2 })} title="2"/>
                <Button onPress={() => navigate('Mesa', { id: 3 })} title="3"/>
                <Button onPress={() => navigate('Mesa', { id: 4 })} title="4"/>
                <Button onPress={() => navigate('Mesa', { id: 5 })} title="5"/>
            </View>
        );
    }
}
