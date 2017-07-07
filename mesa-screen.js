'use strict';

import React from 'react';
import {
    Text,
    View
} from 'react-native';

export default class MesaScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Mesa #${navigation.state.params.id}`,
    });
    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Numero de mesa: {params.id}</Text>
            </View>
        );
    }
}
