import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { openURL } from "expo-linking";
import { listaNombres } from "../canciones.json";

const HeaderCanciones = (props) => {
  const cancion = listaNombres.find((cancion) => cancion.id == props.id);

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.title}>{cancion.nombre}</Text>
        <View>
          <Pressable
            style={styles.youtubeButton}
            onPress={() => openURL(cancion.linkYT)}
          >
            <AntDesign name="youtube" size={32} color="red" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    height: 60,
    flex: 0.92,
  },
  flexContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "5%",
  },
  title: {
    // backgroundColor: "blue",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: "80%",
    textAlign: "center",
  },
  youtubeButton: {
    backgroundColor: "white",
    borderRadius: 4,
    alignSelf: "center",
    paddingHorizontal: "5%",
  },
});

export default HeaderCanciones;
