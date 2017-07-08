'use strict';

import React from 'react';
import {
    Text,
    Button,
    ListView,
    View
} from 'react-native';

export default class MesaScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Mesa #${navigation.state.params.mesa.key}`,
    });

    // ReactNavigation no repinta el UI despues de un `back`, entonces hay que hacerlo manualmente
    _agregarAlimentoAMesaProxy = (alimento: any, key: number) => {
      this.props.navigation.state.params.agregarAlimentoAMesa(alimento, key);
      this.forceUpdate();
    };

    // ReactNavigation no repinta el UI despues de un `back`, entonces hay que hacerlo manualmente
    _removerAlimentoDeMesaProxy = (alimento: any, key: number) => {
        this.props.navigation.state.params.removerAlimentoDeMesa(alimento, key);
        this.forceUpdate();
    };

    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(params.mesa.orden);

        let header = () => {
            return <Text style={{
                padding: 16,
                borderBottomWidth: 2,
                borderBottomColor: '#000'
            }}>ORDEN</Text>
        };

        let row = (entrada) => {
            let tipo = (entrada.tipo[0] + entrada.tipo[1]).toUpperCase();

            return <View style={{
                padding: 16,
                paddingTop: 8,
                borderBottomWidth: 1,
                borderBottomColor: '#999',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                <Text style={{
                    borderColor: '#666',
                    borderWidth: 1,
                    height: 24,
                    lineHeight: 24,
                    marginRight: 8,
                    textAlign: 'center',
                    width: 24,
                }}>{tipo}</Text>

                <Text style={{
                    borderColor: '#333',
                    borderWidth: 1,
                    height: 24,
                    lineHeight: 24,
                    marginRight: 8,
                    textAlign: 'center',
                    width: 24
                }}>{entrada.cantidad}</Text>
                <Text style={{flexGrow: 2}}>{entrada.descripcion}</Text>
                <Button onPress={() => {
                    this._removerAlimentoDeMesaProxy(entrada, params.mesa.key);
                }} title="X" style={{width: 20}}/>
            </View>
        };

        return (
            <View>
                <ListView enableEmptySections={true}
                          dataSource={dataSource}
                          renderSectionHeader={header}
                          renderRow={row}/>

                <Button title="Agregar Alimento"
                        onPress={() => navigate('AgregarAlimento', {
                            key: params.mesa.key,
                            agregarAlimentoAMesa: this._agregarAlimentoAMesaProxy
                        })}/>
            </View>
        );
    }
}
