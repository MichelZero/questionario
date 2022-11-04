import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Perguntas from './screens/perguntas';
import Resultados from './screens/Resultados';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Meu questionário</Text> */}
      <StatusBar style="auto" />
      <Home/>
      {/* <Perguntas/> */}
      {/* <Resultados/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
});
