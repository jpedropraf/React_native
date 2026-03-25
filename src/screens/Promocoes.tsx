import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

export default function Promocoes(){
    return (
        <View style={styles.page}>
            <View style={[styles.heroBox, styles.accentPromocoes]}>
                <Text style={styles.heroTitle}>Promoções</Text>
                <Text style={styles.heroSubtitle}>
                    Descontos, cupons e novidades das lojas.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Fique de olho</Text>
                <Text style={styles.subtitleCenter}>
                    Esta tela vai reunir ofertas por categoria e validade.
                </Text>

                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Cupons</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Liquidação</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Cashback</Text>
                    </View>
                </View>

                <Text style={styles.listItem}>- Filtrar por validade</Text>
                <Text style={styles.listItem}>- Salvar promoções favoritas</Text>
                <Text style={styles.listItem}>- Avisos de novas ofertas</Text>
            </View>
        </View>
    );
}
    
