import { View, Pressable, StyleSheet, Text } from "react-native"

export default function ClearAll({clearAll, fontsLoaded}) {

    return ( 
        <View>
            <Pressable
            style={styles.clearAllButton}
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
    clearAllButton: {
        margin: 5,
        padding: 10,
        backgroundColor: '#419595',
        width: 170,
        height: 50,
        position: 'relative',
        top: 0,
        left: 0,
        marginBottom: 5,        
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'figtreeBold',
        fontSize: 20
    }
  });