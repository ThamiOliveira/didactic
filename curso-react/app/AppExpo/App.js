import React from 'react'
import Home from './screens/home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  Contato  from './screens/contato'
import  Cursos  from './screens/cursos'

const Stack = createStackNavigator({
  Home: {
    navigationOptions: {
      title: 'Home',
    },
    screen: Home
  },
  Cursos: {
    navigationOptions: {
      title: 'Cursos'
    },
    screen: Cursos
  },
  Contato: {
    navigationOptions: {
      title: 'Contato'
    },
    screen: Contato
  }
})

export default createAppContainer(Stack);