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
        title: `Mesa #${navigation.state.params.mesa.key}`,
    });

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Numero de mesa: {params.mesa.key}</Text>
                <Text>LISTA DE ALIMENTOS</Text>
                <Button onPress={() => {
                    params.removerAlimentoDeMesa(params.mesa.orden[0], params.mesa.key);
                }} title="Remover Alimento"/>
                <Button onPress={() => navigate('AgregarAlimento', {
                    key: params.mesa.key,
                    agregarAlimentoAMesa: params.agregarAlimentoAMesa
                })} title="Agregar Alimento"/>
            </View>
        );
    }
}
