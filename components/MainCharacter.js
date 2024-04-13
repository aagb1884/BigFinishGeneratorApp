import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function MainCharacter({getRandomThing, setMainCharacter, setShowGif, setGif}) {
    const previousCharacter = useRef(null);
    

    const mainCharacterList = [
        'The Tenth Doctor',
        "The Tenth Doctor but it's Jackie Tyler in disguise",
        'River Song',
        'Dalek Caan',
        'The Morbius Doctors',
        'Captain Archibald Hamish Lethbridge-Stewart',
        'an unassuming writer/director/producer (plus actor) in his sixties',
        'Pigbin Josh',
        "The Companions' Rebound Support Group", 
        'Young Soldeed',
        "the painting of the Third Doctor from 'Timelash'",  
        'Elton Pope',
        'Lucy Saxon',
        'the Kerblam HR team',
        "Someone Jacob Dudman can't quite do the voice for",
        "Arabella Weir Doctor",
        'Nardole',
        'Morton Dill',
        'Tallulah and Laszlo',
        'Doctor Pastry',
        'Bessie',
        'The Shadow Proclamation'
    ];
    
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require ('../assets/thalia1.mp3'));
        
         await Audio.setAudioModeAsync({ playsInSilentModeIOS: true});
         await sound.playAsync();
        }

    function handleButtonClick() {
                setShowGif(true);
        playSound();
        setGif(require('../assets/untempered_schism.gif'));
        setTimeout(() => {
            getRandomThing(mainCharacterList, previousCharacter, setMainCharacter);
            setShowGif(false);
        }, 3000)  
    }

        return (
            <View>
            <Pressable
            style={styles.button}
            onPress={handleButtonClick}
            >
                <Text style={styles.buttonText}>Get Main Character</Text>
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