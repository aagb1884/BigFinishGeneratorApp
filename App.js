import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/Header';
import Footer from './components/Footer';
import MainCharacter from './components/MainCharacter';
import SupportingCharacter from './components/SupportingCharacter';
import Villain from './components/Villain';
import Location from './components/Location';
import ClearAll from './components/ClearAll';
import ShareButton from './components/Share';
import * as Font from 'expo-font';
import Animated, { useSharedValue, useAnimatedStyle, Easing, withTiming } from 'react-native-reanimated';

export default function App() {
  const [mainCharacter, setMainCharacter] = useState("");
  const [supportingCharacter, setSupportingCharacter] = useState("");
  const [villain, setVillain] = useState("");
  const [location, setLocation] = useState("");
  const [gif, setGif] = useState("");
  const [showGif, setShowGif] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // fonts
  async function loadFonts() {
    await Font.loadAsync({
      'figtree': require('./assets/fonts/Figtree-VariableFont_wght.ttf'),
      'figtreeItalic': require('./assets/fonts/Figtree-Italic-VariableFont_wght.ttf'),
      'figtreeBold': require('./assets/fonts/Figtree-Bold.ttf'),
      'figtreeXBold' : require('./assets/fonts/Figtree-ExtraBold.ttf')
    });
  }

  useEffect(() => {
    const loadFontsAsync = async () => {
      await loadFonts();
      setFontsLoaded(true)
    }
    loadFontsAsync();
  }, []);

  //clearAll functions

  function clearAll() {
    setMainCharacter("");
    setSupportingCharacter("");
    setVillain("");
    setLocation("");
}


// string to pass to social media buttons
const pitch = mainCharacter && supportingCharacter && villain && location
 ? `Pitches like: "At last, ${mainCharacter} and ${supportingCharacter} meet ${villain} in ${location}"`
 : ''
 
  // function to pass to all list files to pick random string
  function getRandomThing(array, previousThing, stateFunction) {
    let randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * array.length)
    } while (randomIndex === previousThing.current)

    previousThing.current = randomIndex;
    const selectedThing = array[randomIndex];
    stateFunction(selectedThing);
}

// fade in animation code
const fadeOpacityMain = useSharedValue(0);
const fadeOpacitySupporting = useSharedValue(0);
const fadeOpacityVillain = useSharedValue(0);
const fadeOpacityLocation = useSharedValue(0);

const fadeInOutIn = (opacity) => {
  opacity.value = withTiming(0, {
    duration: 0,
  });
  opacity.value = withTiming(1, { 
    duration: 3000, 
    easing: Easing.linear, 
}); 
}

const useFadeAnimation = (opacity) => {
  return useAnimatedStyle(() => { 
  return { 
      opacity: opacity.value, 
  }; 
}); 
}

const animatedMainCharacterStyle = useFadeAnimation(fadeOpacityMain);
const animatedSupportingCharacterStyle = useFadeAnimation(fadeOpacitySupporting);
const animatedVillainStyle = useFadeAnimation(fadeOpacityVillain);
const animatedLocationStyle = useFadeAnimation(fadeOpacityLocation);




  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Header fontsLoaded={fontsLoaded}/>

    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        
          <View style={styles.gifWindow}>
          {showGif && (
            <Image source={gif} style={styles.gifImage}/> 
          )}
          </View>
          
          <View style={styles.buttonContainer}>
          <MainCharacter
          setMainCharacter={setMainCharacter}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}
          fadeInOutIn={fadeInOutIn}
          fadeOpacityMain={fadeOpacityMain}
          />

          <SupportingCharacter 
          setSupportingCharacter={setSupportingCharacter}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded} 
          fadeInOutIn={fadeInOutIn}
          fadeOpacitySupporting={fadeOpacitySupporting}/>
        
          <Villain 
          setVillain={setVillain}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}
          fadeInOutIn={fadeInOutIn}
          fadeOpacityVillain={fadeOpacityVillain}/>
        
          <Location 
          setLocation={setLocation}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}
          fadeInOutIn={fadeInOutIn}
          fadeOpacityLocation={fadeOpacityLocation}/>

        
          
          <View style={styles.generatedStory}>
            {fontsLoaded && (
              <>
              {!mainCharacter && !supportingCharacter && !villain && !location && (
              <Text style={styles.instructionText}>Press all four buttons to get your next pitch.</Text>
              )}
              <Animated.View style={animatedMainCharacterStyle}>
          {mainCharacter && <Text style={styles.storyText}>At last, {mainCharacter}</Text>}
              </Animated.View>
              <Animated.View style={animatedSupportingCharacterStyle}>
          {supportingCharacter && <Text style={styles.storyText}>and {supportingCharacter}</Text>}
            </Animated.View>
            <Animated.View style={animatedVillainStyle}>
          {villain && <Text style={styles.storyText}>will meet {villain}</Text>}
              </Animated.View>
              <Animated.View style={animatedLocationStyle}>
          {location && <Text style={styles.storyText}>in {location}</Text>}
              </Animated.View>
            </>
            )}
                  </View>

                  <View style={styles.clearAllContainer}>
          <ClearAll clearAll={clearAll} 
          fontsLoaded={fontsLoaded} />
          </View>
                  </View>

          <View style={styles.sharing}>
            <ShareButton pitch={pitch} fontsLoaded={fontsLoaded} />
          </View>  
         
          
         

      </View>
    </ScrollView>
    <Footer fontsLoaded={fontsLoaded} />
    </SafeAreaProvider>
  );
}


  

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  gifWindow: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  gifImage: {
    marginTop: 20,
    opacity: 0.9,
    resizeMode: 'cover',
    width: '100%',
    height: 255,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  clearAllContainer: {
    marginTop: 10,
  },
  generatedStory: {
    maxWidth: 300,
    marginTop: 20,
  },
  storyText: {
    fontFamily: 'figtree',
    fontSize: 20
  },
  instructionText: {
    fontFamily: 'figtreeItalic',
    color: '#419595',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
