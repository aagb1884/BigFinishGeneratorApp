import { View, StyleSheet, Text } from "react-native"

export default function PithyFooterQuotes ({fontsLoaded}) {

    const footerQuotes = [
        "Matt Fitton hasn't seen his kids in years.",
        "We didn't know RTD was coming back",
        "We've adopted Jon Culshaw and he has expensive tastes",
        "our children need wine",
        'a big Welsh Man stole Rob shearman',
        "we're this close to getting Saward to write Time Inc. as a Lost Story",
        "john dorney is starting to like the idea of becoming a cyberman",
        "'i can't believe i just tried this and got close to a genuine leak' - BigFinishInsider",
        'bob baker somehow keeps pitching us k9 stuff',
        "Eccleston scares us",
        "If the russian federation is reading this, we're interested",
        "if McGann gets his own tv series we're recasting him",
        "we've run out of Doctors for River Song to meet",
        "honestly if you're free and in the area you can play the First Doctor",
        "philip hinchcliffe won't do the morbius doctors boxset unless he can do all the voices",
        "to whoever keeps leaving us the voicemail messages: your jodie impression is bad and you should feel bad",
        "we love stories, unless Chris Bidmead is reading this",
        "we turned Sara Kingdom into a house and we'll do the same to you",
        "Davison says he's going to cancel a writer again",
        "please don't make Jason tap dance for coins",
        "a refuge for the divorced since 1996"
    ];

    const randomIndex = Math.floor(Math.random() * footerQuotes.length);
    const selectedQuote = footerQuotes[randomIndex];  

    return (
        <View style={styles.pithyFooterQuote}>
             {fontsLoaded && (
              <>
            <Text style={styles.pithyFooterQuoteText}>{selectedQuote}</Text>
            </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    pithyFooterQuote: {
        padding: 10
    },
    pithyFooterQuoteText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'figtree'
    }
  });