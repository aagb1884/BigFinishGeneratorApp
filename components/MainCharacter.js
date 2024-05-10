import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function MainCharacter({ fadeOpacityMain, fadeInOutIn, fontsLoaded, getRandomThing, mainCharacterCounter,
                                    setMainCharacter, setMainCharacterCounter, setShowGif, setGif, incrementCounter}) {
    const previousCharacter = useRef(null);
    

    const mainCharacterList = [
        'the Tenth Doctor',
        'the Tenth Doctor but its the Fourteenth Doctor pretending to be the Tenth Doctor',
        "the Tenth Doctor but it's Jackie Tyler pretending to be the Tenth Doctor",
        'River Song',
        'Dalek Caan',
        'The Morbius Doctors',
        'Captain Archibald Hamish Lethbridge-Stewart',
        'an unassuming writer/director/producer (plus actor) in his sixties',
        'Pigbin Josh',
        "the Companions' Rebound Support Group", 
        'Young Soldeed',
        "the painting of the Third Doctor from 'Timelash'",  
        'Elton Pope',
        'Lucy Saxon',
        'the Kerblam HR team',
        "someone Jacob Dudman can't quite do the voice for",
        "the Arabella Weir Doctor",
        'Nardole',
        'Morton Dill',
        'Tallulah and Laszlo',
        "an Unbound Doctor where he's played as Mr Pastry",
        'Bessie',
        'the Shadow Proclamation',
        'Doom',
        "that big Irish cat from 'Gridlock'",
        'Tecteun',
        'a sentient caravan that turns out to be Dodo',
        'K9 trapped in the body of a small girl',
        'Alpha Centauri',
        'the Solitract',
        'Jackson Lake'
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
            incrementCounter(setMainCharacterCounter, mainCharacterCounter);
            setShowGif(false);
            fadeInOutIn(fadeOpacityMain);
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
                <Text style={styles.buttonText}>{mainCharacterCounter >= 1 ? 'Get New Main Character' : 'Get Main Character'}</Text>
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
        fontSize: 20,
        
    }
  });