import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PithyFooterQuotes from './PithyFooterQuotes';

export default function Footer({fontsLoaded}) {
    return (
        <View style={styles.footer}>
            <View style={styles.leftFooter}>
            {fontsLoaded && (
              <>
                <Text style={styles.title}>WE LOVE STORIES</Text>
                </>
            )}
            </View>
            <View style={styles.centreFooter}>
                <Text style={styles.line}>|</Text>
            </View>
            <View style={styles.rightFooter}>
                <PithyFooterQuotes fontsLoaded={fontsLoaded} /> 
            </View>
          
        </View>
     )
}

const styles = StyleSheet.create({
    footer: {
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
    title: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10, 
        fontFamily: 'figtreeBold'
    },
    line: {
        fontSize: 70, 
        color: 'white',
        paddingBottom: '2%'
    },
    leftFooter: {
        width: '49%',
    },
    centreFooter: {
        
    },
    rightFooter: {
        width: '49%'
    }
});
