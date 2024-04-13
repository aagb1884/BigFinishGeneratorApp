import { View, Pressable, StyleSheet, Text } from "react-native"

export default function ClearAll({clearAll}) {

    return ( 
        <View>
            <Pressable
            style={styles.button}
            onPress={clearAll}
            >
                <Text style={styles.buttonText}>Clear All</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        padding: 10,
      backgroundColor: '#972C34',
      width: 200,
      position: 'relative',
      top: 0,
      left: 0,
      marginBottom: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
  });