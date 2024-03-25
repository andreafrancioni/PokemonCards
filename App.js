import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fuoco",
    hp: 39,
    moves: ["Attacco", "Sputafuoco", "Urlo", "Graffio"],
    weaknesses: ["Acqua", "Roccia"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
