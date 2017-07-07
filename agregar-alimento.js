'use strict';

import React from 'react';
import {
    Text,
    Button,
    TextInput,
    View
} from 'react-native';

export default class AgregarAlimentoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cantidad: 3,
            descripcion: "Pescado a la plancha",
            tipo: "Plato principal"
        };
    }

    static navigationOptions = {
        title: 'Agregar Alimento',
    };
    tiposDePlatos = ["Entrada", "Bebida", "Plato Principal", "Postre"];

    _agregarAOrden = () => {
        console.clear();
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        console.log('agregar a orden', this.state, 'key', params.key);
        params.agregarAlimentoAMesa(this.state, params.key);
        goBack(null);
    };

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;

        return (
            <View>
                {/* TODO: Dropdown, descripcion, stepper */}
                <Text>Agregando a mesa: {params.key}</Text>
                <Text>DROPDOWN: {this.state.tipo}</Text>
                <TextInput
                    style={{minHeight: 40, margin: 10, borderColor: 'gray', borderWidth: 1, fontSize: 14}} multiline={true}
                    maxLength={80} onChangeText={(text) => this.setState({descripcion: text})}
                    value={this.state.descripcion} autoCorrect={false} placeholder={'Descripcion'}
                />
                <Text>STEPPER: {this.state.cantidad}</Text>
                <Button onPress={this._agregarAOrden} title="Agregar a la orden"/>
                <Button onPress={() => goBack(null)} title="Cancelar"/>
            </View>
        );
    }
}
