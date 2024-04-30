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
        width: '60%',
        margin: 30,
        marginTop: 45,
        marginLeft: 50
    },
    headerText: {
        fontSize: 25,
        color: 'white',
        paddingTop: 5,
        fontFamily: 'figtree'
    },
    boldHeaderText: {
        fontSize: 40,
        fontWeight: '900',
        color: 'white',
        paddingTop: 5,
        fontFamily: 'figtreeXBold'
    },
    subheader: {
        width: '40%',
        marginTop: 10,
        marginRight: 40,
        padding: 25
    },
    subheaderText: {
        fontFamily: 'figtreeItalic',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 14,
        paddingTop: 10
    }
  });