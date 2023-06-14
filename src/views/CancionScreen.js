import { useEffect } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { listaLetras } from "../canciones.json";
import Colors from "../colors.js";
import { Pressable } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";
import { openURL } from "expo-linking";

const CancionScreen = ({ navigation, route }) => {
  // route tiene un route.navigation, para seguir navegando y route.params
  // con los parametros que se le pasen
  const { idCancion } = route.params;
  const { letra, linkYT } = listaLetras.find(
    (cancion) => cancion.id == idCancion
  );
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.youtubeButton}>
          <Pressable
            // style={styles.youtubeButton}
            onPress={() => openURL(linkYT)}
          >
            <AntDesign name="youtube" size={32} color="red" />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

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
