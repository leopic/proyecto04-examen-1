'use strict';

import React from 'react';
import {
    Text,
    Button,
    TextInput,
    View
} from 'react-native';

import SimpleStepper from 'react-native-simple-stepper';

export default class AgregarAlimentoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cantidad: 1,
            descripcion: "",
            tipo: "Plato principal"
        };
    }

    static navigationOptions = {
        title: 'Agregar a orden',
    };

    tiposDePlatos = ["Entrada", "Bebida", "Plato Principal", "Postre"];

    _agregarAOrden = () => {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        params.agregarAlimentoAMesa(this.state, params.key);
        goBack(null);
    };

    _aumentarCantidad = () => {
        let cantidad = this.state.cantidad;
        cantidad++;
        this.setState({ cantidad: cantidad});
    };

    _reducirCantidad = () => {
        let cantidad = this.state.cantidad;
        cantidad--;
        this.setState({ cantidad: cantidad});
    };

    _cambiarCantidad = (nuevoConteo) => {
        const cantidadActual = this.state.cantidad;

        if (nuevoConteo === cantidadActual) {
            return;
        }

        if (nuevoConteo > cantidadActual) {
            this._aumentarCantidad();
        } else {
            this._reducirCantidad();
        }
    };

    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;

        return (
            <View style={{ padding: 16 }}>
                {/*<Text>Agregando a mesa: {params.key}</Text>*/}
                <Text>DROPDOWN: {this.state.tipo}</Text>

                <View style={{
                    margin: 8,
                    marginLeft: 0,
                    marginRight: 0,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <SimpleStepper valueChanged={(nuevoConteo) => this._cambiarCantidad(nuevoConteo)}
                                   initialValue={this.state.cantidad} maximumValue={100} minimumValue={1} />
                    <Text style={{
                        flexGrow: 1,
                        marginLeft: 10
                    }}>Cantidad: {this.state.cantidad}</Text>
                </View>

                <TextInput
                    style={{
                        minHeight: 40,
                        margin: 8,
                        marginLeft: 0,
                        marginRight: 0,
                        borderColor: 'gray',
                        borderWidth: 1,
                        fontSize: 14
                    }} multiline={true}
                    maxLength={80} onChangeText={(text) => this.setState({descripcion: text})}
                    value={this.state.descripcion} autoCorrect={false} placeholder={'Descripcion'}
                />
                <Button onPress={this._agregarAOrden} title="Agregar a la orden"/>
                <Button onPress={() => goBack(null)} title="Cancelar"/>
            </View>
        );
    }
}
