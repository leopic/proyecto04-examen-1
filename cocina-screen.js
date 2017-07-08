'use strict';

import React from 'react';
import {
    Button,
    ListView,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class CocinaScreen extends React.Component {
    static navigationOptions = {
        title: 'Cocina',
    };

    render() {
        let { params } = this.props.navigation.state;
        let prepararAlimentos = (mesas) => {
            let alimentos: any[] = [];
            mesas.forEach(mesa => {
                mesa.orden.forEach(alimento => {
                    alimento.mesaKey = mesa.key;
                    alimentos.push(alimento);
                });
            });

            return alimentos;
        };

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(prepararAlimentos(params.mesas));

        let header = () => {
            return <View style={{
                padding: 16,
                borderBottomWidth: 2,
                borderBottomColor: '#000',
                backgroundColor: '#fff'
            }}><Text style={{fontSize: 16, fontWeight: 'bold'}}>PENDIENTES</Text>
            </View>
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
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    height: 44,
                    lineHeight: 44,
                    marginRight: 8,
                    textAlign: 'center',
                    width: 44,
                    fontSize: 15,
                }}>{entrada.mesaKey}</Text>
                <Text style={{
                    borderColor: '#666',
                    borderWidth: 1,
                    height: 44,
                    lineHeight: 44,
                    marginRight: 8,
                    textAlign: 'center',
                    width: 44,
                    fontSize: 15,
                }}>{tipo}</Text>

                <Text style={{
                    flexGrow: 2,
                    fontSize: 16
                }}>{entrada.cantidad} - {entrada.descripcion}</Text>

                <TouchableOpacity onPress={() => {
                    params.removerAlimentoDeMesa(entrada, entrada.mesaKey);
                    this.forceUpdate();
                }}>
                    <Text style={{
                        backgroundColor: 'rgb(0, 0, 255)',
                        color: '#fff',
                        fontWeight: 'bold',
                        height: 44,
                        lineHeight: 44,
                        width: 44,
                        textAlign: 'center',
                    }}>X</Text>
                </TouchableOpacity>
            </View>
        };

        return (
            <View>
                <ListView enableEmptySections={true}
                          dataSource={dataSource}
                          renderSectionHeader={header}
                          renderRow={row}/>
            </View>
        );
    }
}
