import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home" 
import Cinema from "../screens/Cinema" 
import Lojas from "../screens/Lojas" 
import Mapa_shopping from "../screens/Mapa_shopping" 
import  Promocoes from "../screens/Promocoes" 
import Restaurantes from "../screens/Restaurantes" 

const Stack = createNativeStackNavigator();

export default function Navigation() {

return(

<NavigationContainer>
  <Stack.Navigator initialRouteName = "Home" >
    <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
    <Stack.Screen name="Cinema" component={Cinema} options={{ title: 'Cinema' }}/>
    <Stack.Screen name="Lojas" component={Lojas} options={{ title: 'Lojas' }}/>
    <Stack.Screen name="Mapa_shopping" component={Mapa_shopping} options={{ title: 'Mapa do shopping' }}/>
    <Stack.Screen name="Promocoes" component={Promocoes} options={{ title: 'Promoções' }}/>
    <Stack.Screen name="Restaurantes" component={Restaurantes} options={{ title: 'Restaurantes' }}/>
  </Stack.Navigator>
</NavigationContainer>
)}
