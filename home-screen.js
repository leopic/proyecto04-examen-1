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
        console.log('mas mesas', 'length', mesas.length);
        mesas.push({key: mesas.length + 1, orden: []});
        this.setState({ mesas: mesas });
    };

    _removerMesa = () => {
        console.log('menos mesas');
        let mesas = this.state.mesas;
        mesas.pop();
        this.setState({ mesas: mesas });
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
            <Button onPress={() => navigate('Intermedio', {mesas: this.state.mesas})} title="Empezar"/>
          </View>
        );
  }
}
