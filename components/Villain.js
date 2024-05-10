import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function Villain({fadeOpacityVillain, fadeInOutIn, fontsLoaded, getRandomThing, 
    setVillain, villainCounter, setVillainCounter, setShowGif, setGif, incrementCounter}) {
    const previousVillain = useRef(null);

    const villainList = [
        'Pigbin Josh',
        'Eighties Cyberleader',
        'Sixteenth Century French Catholics',
        'Madame Kovarian',
        'Jack Robertson',
        'the Timewyrm',
        'General Cobb',
        'evil gas or something',
        'the Birmingham Six',
        'the War Engin',
        "Turlough's solicitor",
        'Mark Lawrenson',
        'Dark Sam',
        'all the Kraals',
        "Bertie Carvel's Mysterious Man",
        'the Shansheeth',
        'a Hypnotron',
        'Woke Davros',
        "Ian Levine's AI Hartnell",
        'that big yellow Dalek',
        'Andrew Marr',
        'Two-Armed Condo',
        "Gareth Roberts' Twitter Feed",
        "a terrifying renegade Time Lord called 'Timmy the Shit'",
        'a team-up of all the Pertwee era Civil Servants',
        'a boom mic',
        'Henry Kissinger',
        'Yvonne Hartman'
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
            incrementCounter(setVillainCounter, villainCounter);
            setShowGif(false);
            fadeInOutIn(fadeOpacityVillain);
    }, 5590)  
}

return (
    <View>
    <Pressable
    style={styles.button}
    onPress={handleButtonClick}
    >
        {fontsLoaded && (
              <>
        <Text style={styles.buttonText}>{villainCounter >= 1 ? 'Get New Villain' : 'Get Villain'}</Text>
        </>
            )}
    </Pressable>
</View>
 )
}

const styles = StyleSheet.create({
button: {
margin: 5,
padding: 10,
backgroundColor: '#972C34',
width: 170,
height: 100,
position: 'relative',
top: 0,
left: 0,
marginBottom: 5,
borderRadius: 5,
justifyContent: 'center',
alignItems: 'center',
flex: 1
},
buttonText: {
color: 'white',
textAlign: 'center',
fontFamily: 'figtree',
fontSize: 20
}
});