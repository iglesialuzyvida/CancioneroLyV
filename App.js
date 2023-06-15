import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/views/HomeScreen";
import CancionScreen from "./src/views/CancionScreen";
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
            headerStyle: { backgroundColor: "#3b82f6" },
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
                headerStyle: { backgroundColor: "white" }, //"#3b82f6" },
                headerTitle: () => <HeaderCanciones title={cancion.nombre} />,
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
