import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../style';

export default function Home(){
    const navigation = useNavigation();

    const menuItems = [
        { title: 'Cinema', screen: 'Cinema', icon: 'Cinema' },
        { title: 'Lojas', screen: 'Lojas', icon: 'Lojas' },
        { title: 'Restaurantes', screen: 'Restaurantes', icon: 'Restaurantes' },
        { title: 'Promoções', screen: 'Promocoes', icon: 'Promoções' },
        { title: 'Mapa do Shopping', screen: 'Mapa_shopping', icon: 'Mapa do Shopping' },
    ];

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Bem-vindo ao Shopping</Text>
                <Text style={styles.subtitle}>Selecione uma opção abaixo</Text>
            </View>

            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuButton}
                        onPress={() => navigation.navigate(item.screen as never)}
                    >
                        <Text style={styles.menuIcon}>{item.icon.toUpperCase()}</Text>  
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}
    
