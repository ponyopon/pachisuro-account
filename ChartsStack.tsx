import { createStackNavigator } from "@react-navigation/stack";
import ChartsScreen from "./screens/ChartsScreen";

const Stack = createStackNavigator();

export const ChartsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChartsStack"
        component={ChartsScreen}
        options={{
          headerTitle: "Charts",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};
