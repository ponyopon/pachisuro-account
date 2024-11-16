import React from "react";
import { View, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RecordsScreen from "./screens/RecordsScreen";
import AddRecordScreen from "./screens/AddRecordScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Stack = createStackNavigator();

const RecordsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecordsStack"
        component={RecordsScreen}
        options={({ navigation, route }) => ({
          title: "Records",
          headerLeft: () => (
            <MaterialIcons
                name="swap-vert" // Filter icon
                size={24}
                color="white" // Set to a visible color
                onPress={() => {
                  const isDescending = route.params?.isSortedDescending ?? true; 
                  navigation.setParams({ isSortedDescending: !isDescending });
                }}
                style={{ marginLeft: 15 }}
              />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 15 }}>
              <MaterialIcons
                name="add" // Plus icon in the top-left corner
                size={24}
                color="white" // Set to a visible color
                onPress={() => navigation.navigate("AddRecord")} // Navigate to AddRecord screen
                // style={{ marginRight: 15 }}
              />
              
            </View>
          ),
          headerStyle: {
            backgroundColor: "#121212", // Set background color if needed
          },
          headerTintColor: "white", // Set header text color
        })}
      />
      <Stack.Screen
        name="AddRecord"
        component={AddRecordScreen}
        options={{ title: "Add Record",
          headerStyle: {
            backgroundColor: "#121212", // Set background color if needed
          },
          headerTintColor: "white", // Set header text color
         }}
        
      />
    </Stack.Navigator>
  );
};

export default RecordsStack;
