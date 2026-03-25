import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

export default function Cinema(){
    return (
        <View style={styles.page}>
            <View style={[styles.heroBox, styles.accentCinema]}>
                <Text style={styles.heroTitle}>Cinema</Text>
                <Text style={styles.heroSubtitle}>
                    Sessões, estreias e horários do shopping.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Em breve</Text>
                <Text style={styles.subtitleCenter}>
                    Aqui você vai ver os filmes em cartaz, trailers e horários por sala.
                </Text>

                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Estreias</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Horários</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Classificação</Text>
                    </View>
                </View>

                <Text style={styles.listItem}>- Programação diária por sala</Text>
                <Text style={styles.listItem}>- Filtros por gênero e horário</Text>
                <Text style={styles.listItem}>- Avisos de estreia</Text>
            </View>
        </View>
    );
}
    
