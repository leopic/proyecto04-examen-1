import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
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

class IntermedioScreen extends React.Component {
    static navigationOptions = {
        title: 'Seleccione',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button onPress={() => navigate('Salon')} title="Salon"/>
                <Button onPress={() => navigate('Cocina')} title="Cocina"/>
            </View>
        );
    }
}

class SalonScreen extends React.Component {

    static navigationOptions = {
        title: 'Salon',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Mesas:</Text>
                <Button onPress={() => navigate('Mesa', { id: 1 })} title="1"/>
                <Button onPress={() => navigate('Mesa', { id: 2 })} title="2"/>
                <Button onPress={() => navigate('Mesa', { id: 3 })} title="3"/>
                <Button onPress={() => navigate('Mesa', { id: 4 })} title="4"/>
                <Button onPress={() => navigate('Mesa', { id: 5 })} title="5"/>
            </View>
        );
    }
}

class CocinaScreen extends React.Component {
    static navigationOptions = {
        title: 'Cocina',
    };
    render() {
        return (
            <View>
                <Text>Pendientes:</Text>
            </View>
        );
    }
}

class MesaScreen extends React.Component {
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

const RestauranteroApp = StackNavigator({
    Home: { screen: HomeScreen },
    Intermedio: { screen: IntermedioScreen },
    Salon: { screen: SalonScreen },
    Cocina: { screen: CocinaScreen },
    Mesa: { screen: MesaScreen },
});

AppRegistry.registerComponent('Restaurantero', () => RestauranteroApp);
