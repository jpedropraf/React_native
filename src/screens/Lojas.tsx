import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

export default function Lojas(){
    return (
        <View style={styles.page}>
            <View style={[styles.heroBox, styles.accentLojas]}>
                <Text style={styles.heroTitle}>Lojas</Text>
                <Text style={styles.heroSubtitle}>
                    Encontre lojas por categoria e localização.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Navegue com facilidade</Text>
                <Text style={styles.subtitleCenter}>
                    A listagem vai mostrar nome, piso, horário e contato quando disponível.
                </Text>

                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Moda</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Serviços</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Tecnologia</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Alimentação</Text>
                    </View>
                </View>

                <Text style={styles.listItem}>- Busca por nome</Text>
                <Text style={styles.listItem}>- Filtros por categoria</Text>
                <Text style={styles.listItem}>- Atalho para o mapa do piso</Text>
            </View>
        </View>
    );
}
    
