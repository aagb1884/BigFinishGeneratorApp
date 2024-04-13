import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function Villain({getRandomThing, setVillain, setShowGif, setGif}) {
    const previousVillain = useRef(null);

    const villainList = [
        'Pigbin Josh',
        'Eighties Cyberleader',
        'Sixteenth Century French Catholics',
        'Madame Kovarian',
        'Jack Robertson',
        'the Timewyrm',
        'that big Yellow Dalek',
        'General Cobb',
        'evil gas or something, whatever it was',
        'the Birmingham six',
        'the War Engin',
        "Turlough's solicitor",
        'Mark Lawrenson',
        'Dark Sam',
        'all the Kraals',
        'Mysterious Man',
        'the Shansheeth',
        'a Hypnotron',
        'woke Davros'
    ];

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require ('../assets/thalia3.mp3'));
        
         await Audio.setAudioModeAsync({ playsInSilentModeIOS: true});
         await sound.playAsync();
        }
        function handleButtonClick() {
        setShowGif(true);
        playSound();
        setGif(require('../assets/mccoy_titles.gif'));
        setTimeout(() => {
        getRandomThing(villainList, previousVillain, setVillain);
        setShowGif(false);
    }, 5590)  
}

return (
    <View>
    <Pressable
    style={styles.button}
    onPress={handleButtonClick}
    >
        <Text style={styles.buttonText}>Get Villain</Text>
    </Pressable>
</View>
 )
}

const styles = StyleSheet.create({
button: {
marginTop: 10,
padding: 10,
backgroundColor: '#972C34',
width: 200,
position: 'relative',
top: 0,
left: 0,
marginBottom: 5
},
buttonText: {
color: 'white',
textAlign: 'center'
}
});