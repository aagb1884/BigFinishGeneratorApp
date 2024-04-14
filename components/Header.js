import { StyleSheet, View, Text } from "react-native";


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
        margin: 25,
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        paddingTop: 10,
        fontFamily: 'figtree'
    },
    boldHeaderText: {
        fontSize: 40,
        fontWeight: '900',
        color: 'white',
        paddingTop: 10,
        fontFamily: 'figtreeXBold'
    },
    subheader: {
        width: '30%',
        marginTop: 20,
        paddingRight: 30
    },
    subheaderText: {
        fontFamily: 'figtreeItalic',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 14,
        paddingTop: 10
    }
  });