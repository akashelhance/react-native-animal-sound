import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';



export default function App() {
  return (

    
    <>
     <ImageBackground
        source={require('./assets/images/img.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
         <StatusBar style='light' />
      <CategoriesScreen />
      </ImageBackground>
    </>
  );
}


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.77
  }
});