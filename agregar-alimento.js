'use strict';

import React from 'react';
import {
    Text,
    Button,
    View
} from 'react-native';

export default class AgregarAlimentoScreen extends React.Component {
    static navigationOptions = {
        title: 'Agregar Alimento',
    };
    tiposDePlatos = ["Entrada", "Bebida", "Plato Principal", "Postre"];
    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;

        return (
            <View>
                {/* TODO: Dropdown, descripcion, stepper */}
                <Text>Agregando a mesa: {params.key}</Text>
                <Text>DROPDOWN</Text>
                <Text>TEXTFIELD</Text>
                <Text>STEPPER</Text>
                <Button onPress={() => goBack(null)} title="Listo"/>
            </View>
        );
    }
}
