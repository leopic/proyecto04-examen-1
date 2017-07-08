'use strict';

import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

import SimpleStepper from 'react-native-simple-stepper';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        let mesas = [
            {key: 1, orden: []},
            {key: 2, orden: []},
            {key: 3, orden: [
                {tipo: "Plato principal", cantidad: 3, descripcion: "Pescado a la plancha"},
                {tipo: "Postre", cantidad: 2, descripcion: "Tres leches"},
                {tipo: "Plato principal", cantidad: 1, descripcion: "Cordeon Blue"},
                {tipo: "Bebida", cantidad: 3, descripcion: "Margarita"},
            ]},
            {key: 4, orden: [
                {tipo: "Postre", cantidad: 2, descripcion: "Pie limon"},
            ]},
            {key: 5, orden: []},
        ];

        this.state = { mesas: mesas };
    }

    _agregarMesa = () => {
        let mesas = this.state.mesas;
        mesas.push({key: mesas.length + 1, orden: []});
        this.setState({ mesas: mesas });
    };

    _removerMesa = () => {
        let mesas = this.state.mesas;
        mesas.pop();
        this.setState({ mesas: mesas });
    };

    _agregarAlimentoAMesa = (alimento: any, key: number) => {
        let mesas = this.state.mesas;
        let idx = mesas.findIndex(mesa => mesa.key === key);
        mesas[idx].orden.push(alimento);
        this.setState({mesas: mesas});
    };

    _removerAlimentoDeMesa = (alimento: any, key: number) => {
        let mesas = this.state.mesas;
        let mesaIdx = mesas.findIndex(mesa => mesa.key === key);
        let mesa = mesas[mesaIdx];
        let alimentoIdx = mesa.orden.findIndex(a => a.descripcion === alimento.descripcion);
        mesa.orden.splice(alimentoIdx, 1);
        mesas[mesaIdx] = mesa;
        this.setState({mesas: mesas});
    };

    _cambioEnNumeroDeMesas = nuevoConteo => {
        const conteoActual = this.state.mesas.length;

        if (nuevoConteo === conteoActual) {
            return;
        }

        if (nuevoConteo > conteoActual) {
            this._agregarMesa();
        } else {
            this._removerMesa();
        }
    };

    static navigationOptions = {
        title: 'RESTAURANTERO',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
          <View>

            <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 16
            }}>
                <SimpleStepper valueChanged={(nuevoConteo) => this._cambioEnNumeroDeMesas(nuevoConteo)}
                               initialValue={this.state.mesas.length} maximumValue={100} />
                <Text style={{
                    flexGrow: 1,
                    marginLeft: 10
                }}>Mesas: {this.state.mesas.length}</Text>
            </View>

            <Button title="Empezar"
                onPress={() => navigate('Intermedio', {
                    mesas: this.state.mesas,
                    agregarAlimentoAMesa: this._agregarAlimentoAMesa,
                    removerAlimentoDeMesa: this._removerAlimentoDeMesa
                })} />
          </View>
        );
  }
}
