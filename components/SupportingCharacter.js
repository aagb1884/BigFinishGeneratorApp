import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function SupportingCharacter({fadeOpacitySupporting, fadeInOutIn, fontsLoaded, getRandomThing, 
    setSupportingCharacter, setSupportingCharacterCounter, supportingCharacterCounter, setShowGif, setGif, incrementCounter}) {
    const previousCharacter = useRef(null);

    const supportingCharacterList = [
        'Pigbin Josh',
        "Choking on an Olive woman from 'The Lazarus Experiment'",
        "that pirate who disappears for ages",
        'Angie and Artie Maitland',
        "Richard Nixon",
        "the 'Eat My Salad' guy",
        "Commander Maxil's hat",
        "Baby Sergeant Benton",
        'Pete the Morgue Attendant',
        "Daniel Barton's mum",
        "Noor Inayat Khan",
        'any of the Class cast who are available',
        'Gilbert M',
        'Courtney Pine',
        'the Ogron-Eater',
        "Commodore 'Tonker' Travers",
        'CyberBrig',
        'the Afghan kid Danny Pink killed',
        'the cow the Doctor asked about time scanners',
        "Maria's Dad",
        "Nerys",
        "Bill's Foster Mum",
        "Boss Baby",
        "an increasingly wounded Davina McCall",
        'Gerry Adams',
        'a cat called Clive Owen',
        "characters similar to - but legally distinct from - ones in 'Thunderbirds' called Jaff Treacy and Broins",
        'Wolsey',
        "the Brigadier's Italian Uncle, Mario,"
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
            incrementCounter(setSupportingCharacterCounter, supportingCharacterCounter)
            setShowGif(false);
            fadeInOutIn(fadeOpacitySupporting);
        }, 3000)  
    }

        return (
            <View style={[styles.buttonContainer, { borderWidth: 2, borderColor: "#ffd33d", borderRadius: 5 }]}>
            <Pressable
            style={styles.button}
            onPress={handleButtonClick}
            >
                {fontsLoaded && (
              <>
                <Text style={styles.buttonText}>{supportingCharacterCounter >= 1 ? 'Get New Supporting Character' : 'Get Supporting Character'}</Text>
                </>
            )}
            </Pressable>
        </View>
         )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 170,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
      },
    button: {
    padding: 10,
    backgroundColor: '#972C34',
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'figtreeBold',
        fontSize: 16,
    }
  });