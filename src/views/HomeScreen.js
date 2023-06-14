import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { listaNombres } from "../canciones.json";
import { useNavigation } from "@react-navigation/native";

const NombreCancion = ({ cancion }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate(cancion.screenName, { idCancion: cancion.id })
        }
      >
        <Text style={styles.nombre}>{cancion.nombre}</Text>
      </Pressable>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.statusbar} />
      <View style={styles.list}>
        <FlatList
          data={listaNombres}
          renderItem={({ item }) => {
            return <NombreCancion nav={navigation} cancion={item} />;
          }}
          keyExtractor={(cancion) => cancion.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: "white", // no importa porque translucent: true
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    backgroundColor: "white",
    color: "black",
  },
  nombre: {
    fontSize: 28,
    margin: "2.5%",
  },
  button: {
    borderTopWidth: 1,
  },
});
