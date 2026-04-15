import React from 'react';
import { View, Text, FlatList, Pressable, ScrollView ,} from 'react-native';
import { styles } from '../style';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MUSICS = [
    { id: "1", song: "My own summer" ,band : "Deftones",album: "Around the fur", image:""},
    { id: "2", song: "Points Of Authority" ,band : "Linkin Park",album: "Hybrid Theory", image:""},
    { id: "3", song: "White Rabbit" ,band : "Egypt Central",album: "White Rabbit", image:""},
    { id: "4", song: "Throne" ,band : "Bring Me The Horozion",album: "That's the Spirit.", image:""},
    { id: "5", song: "You're Going Down" ,band : "Sick Puppies",album: "Tri-Polar", image:""},
];

export function Home() {

    const renderItem = ({ item }: { item: { title: string } }) => (
        <Pressable 
            onPress={() => alert(item.title)} 
            style={styles.item}
        >
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    );

    return (
    <SafeAreaProvider>
   <SafeAreaView style={styles.scroll}>
    <ScrollView>
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                style={styles.lista}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
        </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}