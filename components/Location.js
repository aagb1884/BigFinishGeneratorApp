import { View, Pressable, StyleSheet, Text } from "react-native";
import { Audio } from 'expo-av';
import { useRef } from "react";

export default function Location({fontsLoaded, getRandomThing, setLocation, setShowGif, setGif}) {
    const previousLocation = useRef(null);

    const eventLocationList = [
        'a lift',
        'Pigbin Josh',
        'Norwich',
        "a locked Tesla",
        'the Club Bongo International (Middlesbrough) during the Nineties',
        'F-Space',
        'Albert Square',
        "an earth colony where it's illegal to post cringe",
        "the sleepy English village of Bidmead",
        'the car park in Tenby that always smells of piss',
        "a space station with abandonment issues",
        "the Second Doctor's hotel room",
        "or on a planet named after its  primary characteristic",
        "an amateur production of 'Footloose'",
        'a strange limbo world where nothing is as it seems',
        'a space whale',
        'the Netherfield ball',
        "harry sullivan's infanticide maze"
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
        setGif(require('../assets/rtd_titles.gif'));
        setTimeout(() => {
        getRandomThing(eventLocationList, previousLocation, setLocation);
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
        <Text style={styles.buttonText}>Get Location</Text>
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