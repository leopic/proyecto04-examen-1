import React from 'react';
import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './home-screen';
import IntermedioScreen from './intermedio-screen';
import SalonScreen from './salon-screen';
import CocinaScreen from './cocina-screen';
import MesaScreen from './mesa-screen';
import AgregarAlimentoScreen from './agregar-alimento';

const RestauranteroApp = StackNavigator({
    Home: { screen: HomeScreen },
    Intermedio: { screen: IntermedioScreen },
    Salon: { screen: SalonScreen },
    Cocina: { screen: CocinaScreen },
    Mesa: { screen: MesaScreen },
    AgregarAlimento: { screen: AgregarAlimentoScreen },
});

AppRegistry.registerComponent('Restaurantero', () => RestauranteroApp);
