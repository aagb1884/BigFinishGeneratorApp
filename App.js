import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Image, Text, Platform, PixelRatio } from 'react-native';
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
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  const [mainCharacter, setMainCharacter] = useState("");
  const [mainCharacterCounter, setMainCharacterCounter] = useState(0);
  const [supportingCharacter, setSupportingCharacter] = useState("");
  const [supportingCharacterCounter, setSupportingCharacterCounter] = useState(0);
  const [villain, setVillain] = useState("");
  const [villainCounter, setVillainCounter] = useState(0);
  const [location, setLocation] = useState("");
  const [locationCounter, setLocationCounter] = useState(0);
  const [gif, setGif] = useState("");
  const [showGif, setShowGif] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //orientation
  useEffect(() => {
    async function unlockOrientation(){
      if (Platform.isPad) {
        await ScreenOrientation.unlockAsync();
      } else if (Platform.OS === 'android' && Platform.isTablet) {
        await ScreenOrientation.unlockAsync();
      }
    } unlockOrientation();
  }, [])

  

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

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

  //clearAll functions

  function clearAll() {
    setMainCharacter("");
    setSupportingCharacter("");
    setVillain("");
    setLocation("");
    setMainCharacterCounter(0);
    setSupportingCharacterCounter(0);
    setVillainCounter(0);
    setLocationCounter(0);
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

const incrementCounter = (setState, state) => {
  setState(state + 1);
};


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
          
          <View style={styles.storyButtons}>
                
              <View style={styles.topRow}>
          <MainCharacter
          setMainCharacter={setMainCharacter}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}
          fadeInOutIn={fadeInOutIn}
          fadeOpacityMain={fadeOpacityMain}
          mainCharacterCounter={mainCharacterCounter}
          setMainCharacterCounter={setMainCharacterCounter}
          incrementCounter={incrementCounter}
          
          />

          <SupportingCharacter 
          setSupportingCharacter={setSupportingCharacter}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded} 
          fadeInOutIn={fadeInOutIn}
          fadeOpacitySupporting={fadeOpacitySupporting}
          supportingCharacterCounter={supportingCharacterCounter}
          setSupportingCharacterCounter={setSupportingCharacterCounter}
          incrementCounter={incrementCounter}
          getFontSize={getFontSize}
          />
          </View>

          <View style={styles.middleRow}>
          <Villain 
          setVillain={setVillain}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}
          fadeInOutIn={fadeInOutIn}
          fadeOpacityVillain={fadeOpacityVillain}
          villainCounter={villainCounter}
          setVillainCounter={setVillainCounter}
          incrementCounter={incrementCounter}
          getFontSize={getFontSize}
          />
        
          <Location 
          setLocation={setLocation}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}
          fadeInOutIn={fadeInOutIn}
          fadeOpacityLocation={fadeOpacityLocation}
          locationCounter={locationCounter}
          setLocationCounter={setLocationCounter}
          incrementCounter={incrementCounter}
          getFontSize={getFontSize}
          />
          </View>
          

          <View style={styles.bottomRow}>

            
                  {(mainCharacter || supportingCharacter || villain || location) && (
                  <ClearAll clearAll={clearAll} 
                  fontsLoaded={fontsLoaded} />
                  )} 
            
              {mainCharacter && supportingCharacter && villain && location && (
              <ShareButton pitch={pitch} fontsLoaded={fontsLoaded} />
              )}
          

          </View>

        </View>
        
        

          <View style={styles.generatedStory}>
            {fontsLoaded && (
              <>
              {!mainCharacter && !supportingCharacter && !villain && !location && (
              <Text style={styles.instructionText}>Press all four buttons to get your next pitch.</Text>
              )}
              <Animated.View style={animatedMainCharacterStyle}>
          {mainCharacter && <Text style={[{fontSize: getFontSize(20)}, styles.storyText,]}>At last, {mainCharacter}</Text>}
              </Animated.View>
              <Animated.View style={animatedSupportingCharacterStyle}>
          {supportingCharacter && <Text style={[{fontSize: getFontSize(20)}, styles.storyText,]}>and {supportingCharacter}</Text>}
            </Animated.View>
            <Animated.View style={animatedVillainStyle}>
          {villain && <Text style={[{fontSize: getFontSize(20)}, styles.storyText,]}>will meet {villain}</Text>}
              </Animated.View>
              <Animated.View style={animatedLocationStyle}>
          {location && <Text style={[{fontSize: getFontSize(20)}, styles.storyText,]}>in {location}</Text>}
              </Animated.View>
            </>
            )}
           </View>
                
               

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
    marginTop: 35,
  },
  storyButtons: {
    flexDirection: 'column',
    marginHorizontal: 'auto',
  },
  topRow: {
    flexDirection: 'row',
  },
  middleRow: {
    flexDirection: 'row',
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  generatedStory: {
    maxWidth: 300,
    marginTop: 20,
  },
  storyText: {
    textAlign: 'left',
    fontFamily: 'figtreeBold',
  },
  instructionText: {
    fontFamily: 'figtreeItalic',
    color: '#419595',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
