'use strict';

import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'RESTAURANTERO',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <Text>TODO: Mesas stepper</Text>
            <Button onPress={() => navigate('Intermedio')} title="Empezar"/>
          </View>
        );
  }
}
