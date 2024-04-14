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

export default function App() {
  const [mainCharacter, setMainCharacter] = useState("");
  const [supportingCharacter, setSupportingCharacter] = useState("");
  const [villain, setVillain] = useState("");
  const [location, setLocation] = useState("");
  const [gif, setGif] = useState("");
  const [showGif, setShowGif] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

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

  function clearAll() {
    setMainCharacter("");
    setSupportingCharacter("");
    setVillain("");
    setLocation("");
}

// string to pass to social media buttons
const pitch = mainCharacter && supportingCharacter && villain && location
 ? `"At last, ${mainCharacter} and ${supportingCharacter} meet ${villain} in ${location}!"`
 : ''
 
// function to pass to all list files to play audio on button press


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
          fontsLoaded={fontsLoaded} />

          <SupportingCharacter 
          setSupportingCharacter={setSupportingCharacter}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded} />
        
          <Villain 
          setVillain={setVillain}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}/>
        
          <Location 
          setLocation={setLocation}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} 
          fontsLoaded={fontsLoaded}/>

          <View style={styles.clearAllContainer}>
          <ClearAll clearAll={clearAll} 
          fontsLoaded={fontsLoaded} />
          </View>
          
          <View style={styles.generatedStory}>
            {fontsLoaded && (
              <>
              {!mainCharacter && !supportingCharacter && !villain && !location && (
              <Text style={styles.instructionText}>Press all four buttons to get your next pitch.</Text>
              )}
          {mainCharacter && <Text style={styles.storyText}>At last, {mainCharacter}</Text>}
          {supportingCharacter && <Text style={styles.storyText}>and {supportingCharacter}</Text>}
          {villain && <Text style={styles.storyText}>will meet {villain}</Text>}
          {location && <Text style={styles.storyText}>in {location}</Text>}
          </>
            )}
          </View>

          <View style={styles.sharing}>
            <ShareButton pitch={pitch} fontsLoaded={fontsLoaded} />
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
  gifImage: {
    marginTop: 20,
    maxWidth: 300,
    maxHeight: 200,
    zIndex: 1,
    flexDirection: 'column',
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
    maxWidth: 250,
    marginTop: 20,
  },
  storyText: {
    fontFamily: 'figtree',
    fontSize: 18
  },
  instructionText: {
    fontFamily: 'figtreeItalic',
    color: '#2C968F',
    textAlign: 'center'
  }
});
