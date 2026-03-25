import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../style';

export default function Home(){
    const navigation = useNavigation();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const menuItems = [
        { title: 'Cinema', screen: 'Cinema', icon: 'local-movies' as const },
        { title: 'Lojas', screen: 'Lojas', icon: 'storefront' as const },
        { title: 'Restaurantes', screen: 'Restaurantes', icon: 'restaurant' as const },
        { title: 'Promoções', screen: 'Promocoes', icon: 'local-offer' as const },
        { title: 'Mapa do Shopping', screen: 'Mapa_shopping', icon: 'map' as const },
    ];

    return (
        <ScrollView style={styles.scroll}>

            <View style={styles.menu}>
                {menuItems.map((item, index) => (
                    <Pressable
                        key={index}
                        style={({ pressed }) => [
                            styles.menuBtn,
                            (hoveredIndex === index || pressed) && styles.menuBtnHover,
                        ]}
                        onHoverIn={() => setHoveredIndex(index)}
                        onHoverOut={() => setHoveredIndex(null)}
                        onPress={() => navigation.navigate(item.screen as never)}
                    >
                        <MaterialIcons name={item.icon} size={22} style={styles.menuLabel} />
                        <Text style={styles.menuTxt}>{item.title}</Text>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
}
    
