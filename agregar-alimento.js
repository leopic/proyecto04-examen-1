'use strict';

import React from 'react';
import {
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    Picker,
    View
} from 'react-native';

import SimpleStepper from 'react-native-simple-stepper';

export default class AgregarAlimentoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cantidad: 1,
            descripcion: "",
            tipo: "Plato principal",
            tipos: ["Entrada", "Bebida", "Plato Principal", "Postre"]
        };
    }

    static navigationOptions = {
        title: 'Agregar a orden',
    };

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

        console.clear();
        console.log(this.state.tipos);

        let listaDeTiposDeComida = this.state.tipos.map((tipo, idx): Picker.Item[] => {
            return <Picker.Item key={idx} value={tipo} label={tipo} />
        });

        return (
            <View style={{
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                padding: 16,
            }}>
                <View>
                    <Picker
                        selectedValue={this.state.tipo}
                        onValueChange={itemValue => this.setState({tipo: itemValue})}>
                        {listaDeTiposDeComida}
                    </Picker>

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
                            marginLeft: 8,
                            fontSize: 16,
                        }}>Cantidad: {this.state.cantidad}</Text>
                    </View>

                    <TextInput
                        style={{
                            minHeight: 44,
                            margin: 16,
                            marginLeft: 0,
                            marginRight: 0,
                            borderBottomColor: '#999',
                            borderBottomWidth: 1,
                            lineHeight: 44,
                            fontSize: 14
                        }} multiline={true}
                        maxLength={80} onChangeText={(text) => this.setState({descripcion: text})}
                        value={this.state.descripcion} autoCorrect={false} placeholder={'Descripcion'}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={() => goBack(null)}>
                        <Text style={{
                            backgroundColor: 'rgb(255, 0, 0)',
                            color: '#fff',
                            fontWeight: 'bold',
                            marginBottom: 8,
                            height: 44,
                            lineHeight: 44,
                            textAlign: 'center',
                        }}>CANCELAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._agregarAOrden}>
                        <Text style={{
                            backgroundColor: 'rgb(0, 0, 255)',
                            color: '#fff',
                            fontWeight: 'bold',
                            height: 44,
                            lineHeight: 44,
                            textAlign: 'center',
                        }}>AGREGAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
