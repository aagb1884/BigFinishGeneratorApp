import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function Location({fadeOpacityLocation, fadeInOutIn, fontsLoaded, getRandomThing, 
    setLocation, locationCounter, setLocationCounter, setShowGif, setGif, incrementCounter}) {
    const previousLocation = useRef(null);

    const eventLocationList = [
        'a lift.',
        'Pigbin Josh.',
        'Norwich.',
        "a locked Tesla.",
        'the Club Bongo International (Middlesbrough) during the Nineties.',
        'F-Space.',
        'Albert Square.',
        "an Earth colony where it's illegal to post cringe.",
        "the sleepy English village of Bidmead.",
        'the car park in Tenby that always smells of piss.',
        "a space station with abandonment issues.",
        "the Second Doctor's hotel room.",
        "or on a planet named after its primary characteristic.",
        "an amateur production of 'Footloose'.",
        'a strange limbo world where nothing is as it seems.',
        'a space whale.',
        'the Netherfield ball.',
        "Harry Sullivan's infanticide maze.",
        "Charles Dickens' death bed.",
        'a softplay.',
        'Stoke-on-Trent.',
        'the Death Zone.',
        "Adric's pocket.",
        "the Master's Mind Palace.",
        'the Land of Non-Fiction.',
        'a karaoke bar.',
        'a small, poorly staffed garden centre.',
        'the year Nick Briggs last enjoyed Doctor Who (1976).',
        'the divergent universe.',
        'Uzbekistan.',
        "in the studio where Alanis Morissette is recording 'You Oughta Know'."
    ];


    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require ('../assets/thalia4.mp3'));
        
         await Audio.setAudioModeAsync({ playsInSilentModeIOS: true});
         await sound.playAsync();
        }
        function handleButtonClick() {
            setShowGif(true);
            playSound();
            setGif(require('../assets/eighth_title.gif'));
        setTimeout(() => {
            getRandomThing(eventLocationList, previousLocation, setLocation);
            incrementCounter(setLocationCounter, locationCounter);
            setShowGif(false);
            fadeInOutIn(fadeOpacityLocation);
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
        <Text style={styles.buttonText}>{locationCounter >= 1 ? 'Get New Location' : 'Get Location'}</Text>
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
fontSize: 18
}
});