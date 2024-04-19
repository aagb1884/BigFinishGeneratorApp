import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({fontsLoaded}) {


    return (
        <View style={styles.header}>
            {fontsLoaded && (
                    <>
            <View style={styles.h1}>
                
            <Text style={styles.headerText}>The</Text>
            <Text style={styles.boldHeaderText}>BIG FINISH</Text> 
            <Text style={styles.headerText}>Boxset Generator</Text>
            </View>
            <View style={styles.subheader}>
           
            <Text style={styles.subheaderText}>Because we have hundreds of these to make and ideas are hard</Text>
    
            </View>
              </>
              )}
        </View>
     )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#972C34',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 999,
    },
    h1: {
        width: '70%',
        margin: windowWidth * 0.08,
    },
    headerText: {
        fontSize: windowWidth * 0.06,
        color: 'white',
        paddingTop: windowHeight * 0.01,
        fontFamily: 'figtree'
    },
    boldHeaderText: {
        fontSize: windowWidth * 0.1,
        fontWeight: '900',
        color: 'white',
        paddingTop: windowHeight * 0.01,
        fontFamily: 'figtreeXBold'
    },
    subheader: {
        width: '30%',
        marginTop: windowHeight * 0.02, 
        paddingRight: windowWidth * 0.14,
    },
    subheaderText: {
        fontFamily: 'figtreeItalic',
        color: 'white',
        fontStyle: 'italic',
        fontSize: windowWidth * 0.03, 
        paddingTop: windowHeight * 0.015,
    }
  });