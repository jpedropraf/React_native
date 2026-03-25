import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

export default function Mapa_shopping(){
    return (
        <View style={styles.page}>
            <View style={[styles.heroBox, styles.accentMapa]}>
                <Text style={styles.heroTitle}>Mapa do Shopping</Text>
                <Text style={styles.heroSubtitle}>
                    Localize lojas, entradas, banheiros e elevadores.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Rotas e pontos úteis</Text>
                <Text style={styles.subtitleCenter}>
                    Aqui vai ficar o mapa por piso, com zoom e rotas simples.
                </Text>

                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Pisos</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Acessibilidade</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Serviços</Text>
                    </View>
                </View>

                <Text style={styles.listItem}>- Buscar um destino</Text>
                <Text style={styles.listItem}>- Ver caminho até a loja</Text>
                <Text style={styles.listItem}>- Pontos de referência</Text>
            </View>
        </View>
    );
}
    
