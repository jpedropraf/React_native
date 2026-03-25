import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

export default function Restaurantes(){
    return (
        <View style={styles.page}>
            <View style={[styles.heroBox, styles.accentRestaurantes]}>
                <Text style={styles.heroTitle}>Restaurantes</Text>
                <Text style={styles.heroSubtitle}>
                    Opções para todos os gostos, do rápido ao completo.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>O que você vai encontrar</Text>
                <Text style={styles.subtitleCenter}>
                    Lista com tipo de culinária, faixa de preço e horário de funcionamento.
                </Text>

                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Praça de alimentação</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Cafés</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Doces</Text>
                    </View>
                </View>

                <Text style={styles.listItem}>- Filtro por culinária</Text>
                <Text style={styles.listItem}>- Opções vegetarianas</Text>
                <Text style={styles.listItem}>- Destaques do dia</Text>
            </View>
        </View>
    );
}
    
