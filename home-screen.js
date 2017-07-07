'use strict';

import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

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
        const tiposDePlatos = ["Entrada", "Bebida", "Plato Principal", "Postre"];

        this.state = {
            mesas: mesas,
            tiposDePlatos: tiposDePlatos
        };
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

    static navigationOptions = {
        title: 'RESTAURANTERO',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <Text>MESAS:</Text>
            <Button onPress={this._removerMesa} title="-"/>
            <Text>{this.state.mesas.length}</Text>
            <Button onPress={this._agregarMesa} title="+"/>
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
