import { StyleSheet, View, Text } from "react-native";

export default function Header() {

    return (
        <View style={styles.header}>
            <View style={styles.headerText}>
            <Text>The BIG FINISH Boxset Generator</Text>
            </View>
            <Text style={styles.subheaderText}>Because we have hundreds of these to make and ideas are hard</Text>
        </View>
     )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#972C34',
        color: 'white',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 100,
        zIndex: 999,
    },
    headerText: {

    },
    subheaderText: {
        fontStyle: 'italic',
    }
  });