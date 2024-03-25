import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
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

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Acqua",
    hp: 44,
    moves: ["Grazia", "Pistola Acqua", "Testata", "Raffica"],
    weaknesses: ["Erba", "Elettro"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Elettro",
    hp: 35,
    moves: ["Tuonopugno", "Fulmine", "Tuononda", "Scarica"],
    weaknesses: ["Terra"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Erba",
    hp: 45,
    moves: ["Parassiseme", "Foglielama", "Velenpuntura", "Fogliamaglia"],
    weaknesses: ["Fuoco", "Volante"],
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
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
