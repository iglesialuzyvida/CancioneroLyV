import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Pressable } from "react-native";

const HeaderCanciones = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 60,
  },
  title: {
    color: "white",
  },
});

export default HeaderCanciones;
