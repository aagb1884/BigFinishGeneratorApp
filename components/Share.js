import React from 'react';
import {Alert, Share, View, Pressable, StyleSheet, Text} from 'react-native';

export default function ShareButton ({pitch, fontsLoaded}) {
   
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        `Ever wondered what you'd say to Nick Briggs if you were trapped in a lift together?
        \nWell wonder no more! 
        \nWith the Big Finish Boxset Generator App you can come up with dozens of lukewarm pitches to while away the increasingly oxygen-starved hours.
        \n${pitch}
        \nhttps://andrewblair.co.uk/apps/big-finish-generator`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View>
      <Pressable style={styles.shareButton} onPress={onShare} title="Share">
      {fontsLoaded && (
              <>
                <Text style={styles.buttonText}>Share</Text>
                </>
            )}
            </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  shareButton: {
    margin: 5,
    padding: 10,
    backgroundColor: '#2C3396',
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
