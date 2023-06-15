import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/views/HomeScreen";
import CancionScreen from "./src/views/CancionScreen";
import HeaderCanciones from "./src/components/HeaderCanciones";
import Colors from "./src/colors.js";
import { listaNombres } from "./src/canciones.json";
import HeaderCanciones from "./src/components/HeaderCanciones";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "Cancionero Luz y Vida",
            headerStyle: { backgroundColor: Colors.header },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        {listaNombres.map((cancion) => {
          return (
            <Stack.Screen
              key={cancion.id}
              name={cancion.screenName}
              component={CancionScreen}
              options={{
                headerStyle: { backgroundColor: Colors.header }, //"#3b82f6" },
                headerTitle: () => <HeaderCanciones id={cancion.id} />,
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
