import { View, Pressable, StyleSheet, Text } from "react-native"

export default function ClearAll({clearAll, fontsLoaded}) {

    return ( 
        <View>
            <Pressable
            style={styles.button}
            onPress={clearAll}
            >
                 {fontsLoaded && (
              <>
                <Text style={styles.buttonText}>Clear All</Text>
                </>
            )}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#2C968F',
        width: 250,
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