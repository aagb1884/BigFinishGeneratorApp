import { StyleSheet, View, Text } from "react-native";

export default function Header() {

    return (
        <View style={styles.header}>
            <View style={styles.h1}>
            <Text style={styles.headerText}>The BIG FINISH Boxset Generator</Text>
            </View>
            <View style={styles.subheader}>
            <Text style={styles.subheaderText}>Because we have hundreds of these to make and ideas are hard</Text>
            </View>
            
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
        marginTop: 25
    },
    headerText: {
        fontSize: 40,
        color: 'white',
        paddingTop: 10
    },
    subheader: {
        width: '30%',
        marginTop: 20
    },
    subheaderText: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 10,
        paddingTop: 10
    }
  });