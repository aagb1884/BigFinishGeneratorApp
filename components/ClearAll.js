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
        marginTop: 10,
        padding: 10,
        backgroundColor: '#419595',
        width: 250,
        position: 'relative',
        top: 0,
        left: 0,
        
        borderRadius: 5
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'figtree',
        fontSize: 18
    }
  });