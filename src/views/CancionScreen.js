import { ScrollView, Text, StyleSheet } from "react-native";
import { listaLetras } from "../canciones.json";

const CancionScreen = ({ route }) => {
  // route tiene un route.navigation, para seguir navegando y route.params
  // con los parametros que se le pasen
  const { idCancion } = route.params;
  const { letra } = listaLetras.find((cancion) => cancion.id == idCancion);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>{letra}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: "3%", marginBot: "5%" },
  text: {
    fontSize: 19,
    textAlign: "center",
  },
});

export default CancionScreen;
