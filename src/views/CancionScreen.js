import { View, ScrollView, Text, StyleSheet } from "react-native";
import FooterCanciones from "../components/FooterCanciones";
import { listaLetras } from "../canciones.json";
import Colors from "../colors.js";

const CancionScreen = ({ navigation, route }) => {
  // route tiene un route.navigation, para seguir navegando y route.params
  // con los parametros que se le pasen
  const { idCancion } = route.params;
  const { letra, linkYT } = listaLetras.find(
    (cancion) => cancion.id == idCancion
  );

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>{letra}</Text>
      </ScrollView>
      <FooterCanciones />
    </>
  );
};

const styles = StyleSheet.create({
  container: { padding: "3%", marginBot: "5%" },
  text: {
    fontSize: 19,
    textAlign: "center",
  },
  youtubeButton: {
    // paddingHorizontal: "10%",

    minWidth: 45,
    display: "flex",
    flex: -1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  icon: {},
});

export default CancionScreen;
