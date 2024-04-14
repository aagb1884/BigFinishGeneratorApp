import React from 'react';
import {Alert, Share, View, Button} from 'react-native';

export default function ShareButton ({pitch}) {
   
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        `Ever wondered what you'd say to Nick Briggs if you were trapped in a lift together?
        \nWell wonder no more! 
        \nWith the Big Finish Boxset Generator App you can come up with dozens of lukewarm pitches to while away the increasingly oxygen-starved hours.
        \n${pitch}`,
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
    <View style={{marginTop: 50}}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

