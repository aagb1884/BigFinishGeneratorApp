import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function SupportingCharacter({fontsLoaded, getRandomThing, setSupportingCharacter, setShowGif, setGif}) {
    const previousCharacter = useRef(null);

    const supportingCharacterList = [
        'Pigbin Josh',
        "Choking on an Olive woman from 'The Lazarus Experiment'",
        "that pirate who disappears for ages",
        'Angie and Artie Maitland',
        "Richard Nixon",
        "'Eat My Salad' guy",
        "Commander Maxil's hat",
        "Baby Sergeant Benton",
        'Pete the Morgue Attendant',
        "Daniel Barton's mum",
        "Noor Inayat Khan",
        'any of the Class cast who are available',
        'Gilbert M',
        'Courtney Pine',
        'the Ogron-Eater',
        "commodore 'tonker' travers",
        'CyberBrig',
        'the Afghan kid Danny Pink killed',
        'the cow the Doctor asked about time scanners',
        "Maria's Dad",
        "Nerys",
        "Bill's Foster Mum",
        "Boss Baby"
    ];

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require ('../assets/thalia2.mp3'));
        
         await Audio.setAudioModeAsync({ playsInSilentModeIOS: true});
         await sound.playAsync();
        }

    function handleButtonClick() {
            setShowGif(true);
        playSound();
        setGif(require('../assets/capaldi_clocks.gif'));
        setTimeout(() => {
            getRandomThing(supportingCharacterList, previousCharacter, setSupportingCharacter);
            setShowGif(false);
        }, 3000)  
    }

        return (
            <View>
            <Pressable
            style={styles.button}
            onPress={handleButtonClick}
            >
                {fontsLoaded && (
              <>
                <Text style={styles.buttonText}>Get Supporting Character</Text>
                </>
            )}
            </Pressable>
        </View>
         )
}

const styles = StyleSheet.create({
    button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#972C34',
    width: 300,
    position: 'relative',
    top: 0,
    left: 0,
    marginBottom: 5,
    borderRadius: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'figtree'
    }
  });