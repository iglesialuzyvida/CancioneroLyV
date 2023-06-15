import { View, Text, StyleSheet } from "react-native";

const FooterCanciones = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 40,
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default FooterCanciones;
