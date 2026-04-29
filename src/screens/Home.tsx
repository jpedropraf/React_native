import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import { styles } from '../style';

type Music = {
    id: string;
    song: string;
    band: string;
    album: string;
    releaseDate: string;
    image: number;
};

const MUSICS = [
    {
        id: '1',
        song: 'My Own Summer (Shove It)',
        band: 'Deftones',
        album: 'Around the Fur',
        releaseDate: '28/10/1997',
        image: require('../../assets/albums/around-the-fur.jpg'),
    },
    {
        id: '2',
        song: 'Points of Authority',
        band: 'Linkin Park',
        album: 'Hybrid Theory (Deluxe Edition)',
        releaseDate: '24/10/2000',
        image: require('../../assets/albums/hybrid-theory.jpg'),
    },
    {
        id: '3',
        song: 'White Rabbit',
        band: 'Egypt Central',
        album: 'White Rabbit (Deluxe Edition)',
        releaseDate: '31/05/2011',
        image: require('../../assets/albums/white-rabbit.jpg'),
    },
    {
        id: '4',
        song: 'Throne',
        band: 'Bring Me The Horizon',
        album: "That's the Spirit",
        releaseDate: '24/07/2015',
        image: require('../../assets/albums/thats-the-spirit.jpg'),
    },
    {
        id: '5',
        song: "You're Going Down (Radio Edit)",
        band: 'Sick Puppies',
        album: 'Tri-Polar',
        releaseDate: '01/01/2010',
        image: require('../../assets/albums/tri-polar.jpg'),
    },
] as const satisfies readonly Music[];

export function Home() {
    const handlePress = (item: Music) => {
        const message = `Lançamento: ${item.releaseDate}`;
        if (Platform.OS === 'web' && typeof window !== 'undefined' && typeof window.alert === 'function') {
            window.alert(`${item.album}\n${message}`);
            return;
        }
        Alert.alert(item.album, message);
    };

    const renderItem = ({ item }: { item: Music }) => (
        <TouchableOpacity
            onPress={() => handlePress(item)}
            activeOpacity={0.85}
            style={styles.trackRow}
        >
            <Image source={item.image} style={styles.cover} />
            <View style={styles.trackInfo}>
                <Text numberOfLines={1} style={styles.trackName}>{item.song}</Text>
                <Text numberOfLines={1} style={styles.trackMeta}>{item.band}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Musics to Listen</Text>
            <FlatList
                numColumns={1}
                style={styles.lista}
                contentContainerStyle={styles.listaContent}
                data={MUSICS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}
