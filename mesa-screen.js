'use strict';

import React from 'react';
import {
    Text,
    ListView,
    TouchableOpacity,
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
            return <View style={{
                backgroundColor: '#fff',
                borderBottomColor: '#000',
                borderBottomWidth: 2,
                padding: 16,
            }}><Text style={{fontSize: 16, fontWeight: 'bold'}}>ORDEN</Text>
            </View>
        };

        let row = (entrada) => {
            let tipo = (entrada.tipo[0] + entrada.tipo[1]).toUpperCase();

            return <View style={{
                alignItems: 'center',
                borderBottomColor: '#999',
                borderBottomWidth: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: 16,
                paddingTop: 8,
            }}>
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

                <TouchableOpacity onPress={() =>{
                    this._removerAlimentoDeMesaProxy(entrada, params.mesa.key);
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
            <View style={{
                height: '100%'
            }}>
                <ListView enableEmptySections={true}
                          dataSource={dataSource}
                          renderSectionHeader={header}
                          renderRow={row}/>

                <TouchableOpacity onPress={() => navigate('AgregarAlimento', {
                    key: params.mesa.key,
                    agregarAlimentoAMesa: this._agregarAlimentoAMesaProxy
                })}>
                    <Text style={{
                        backgroundColor: 'rgb(0, 0, 255)',
                        color: '#fff',
                        fontWeight: 'bold',
                        height: 44,
                        lineHeight: 44,
                        margin: 16,
                        textAlign: 'center',
                    }}>AGREGAR A ORDEN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
