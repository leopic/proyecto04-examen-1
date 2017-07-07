'use strict';

import React from 'react';
import {
    Text,
    Button,
    View
} from 'react-native';

export default class MesaScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Mesa #${navigation.state.params.id}`,
    });
    data = {id: 3, orden: [
        {tipo: "Plato principal", cantidad: 3, descripcion: "Pescado a la plancha"},
        {tipo: "Postre", cantidad: 2, descripcion: "Tres leches"},
        {tipo: "Plato principal", cantidad: 1, descripcion: "Cordeon Blue"},
        {tipo: "Bebida", cantidad: 3, descripcion: "Margarita"},
    ]};

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Numero de mesa: {params.id}</Text>
                <Text>LISTA DE ALIMENTOS</Text>
                <Button onPress={() => navigate('AgregarAlimento', { id: 1 })} title="Agregar Alimento"/>
            </View>
        );
    }
}
