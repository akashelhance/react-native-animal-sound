
import * as React from 'react';
import { Pressable,ImageBackground, View, Alert, Text, StyleSheet, Platform } from 'react-native';
import { Audio } from 'expo-av';

function CategoryGridTile({ title, url,soundLink }) {
  const [sound, setSound] = React.useState();

  async function playSound() {

   
    const { sound } = await Audio.Sound.createAsync(
      {
        uri:soundLink
      },
      { shouldPlay: true }
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync({soundLink:soundLink}); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  return (
    <View style={styles.gridItem}>
      <Pressable onPress={playSound}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer]}>

        <ImageBackground source={{ uri: url, cache: 'only-if-cached' }} style={{width: '100%', height: '100%'}}>
        <Text style={styles.title}>{title}</Text>
  </ImageBackground>

        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 2,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    
  },
});