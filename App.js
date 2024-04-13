import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/Header';
import Footer from './components/Footer';
import MainCharacter from './components/MainCharacter';
import SupportingCharacter from './components/SupportingCharacter';
import Villain from './components/Villain';
import Location from './components/Location';
import ClearAll from './components/ClearAll';
import ShareButton from './components/Share';


export default function App() {
  const [mainCharacter, setMainCharacter] = useState("");
  const [supportingCharacter, setSupportingCharacter] = useState("");
  const [villain, setVillain] = useState("");
  const [location, setLocation] = useState("");
  const [gif, setGif] = useState("");
  const [showGif, setShowGif] = useState(false);

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
      <StatusBar style="auto" />
      <Header />
    <View style={styles.container}>
    
        <View style={styles.mainContent}>
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
          setGif={setGif} />

          <SupportingCharacter 
          setSupportingCharacter={setSupportingCharacter}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} />
        
          <Villain 
          setVillain={setVillain}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} />
        
          <Location 
          setLocation={setLocation}
          getRandomThing={getRandomThing}
          setShowGif={setShowGif}
          setGif={setGif} />
          </View>
          <View style={styles.clearAllContainer}>
          <ClearAll clearAll={clearAll} />
          </View>
          
          <View style={styles.generatedStory}>
          {mainCharacter && <Text style={styles.mainCharacter}>At last, {mainCharacter}</Text>}
          {supportingCharacter && <Text style={styles.supportingCharacter}>and {supportingCharacter}</Text>}
          {villain && <Text style={styles.villain}>will meet {villain}</Text>}
          {location && <Text style={styles.location}>in {location}</Text>}
          </View>

          <View style={styles.sharing}>
            <ShareButton pitch={pitch} />

          </View>  
    
        </View>
      
    </View>
    <Footer />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  mainContent: {
    
  },
  gifImage: {
    maxWidth: 300,
    justifyContent: 'center',
    zIndex: 1
  },
  buttonContainer: {

  },
  clearAllContainer: {
    marginTop: 10,
  }
});
