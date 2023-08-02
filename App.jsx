import 'react-native-gesture-handler';

import { Ionicons } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { MealsOverviewScreen } from './src/screens/MealsOverviewScreen';
import { MealDetailsScreen } from './src/screens/MealDetailsScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';

// import { FavoritesProvider } from './src/store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './src/store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#351401"
        },
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401"
        },
        drawerActiveTintColor: "#3f2f25",
        drawerActiveBackgroundColor: "#e4baa1",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons name="list" color={color} size={size} />
            )
          }
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        options={{
          title: "Your Favorite Meals",
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons name="star" color={color} size={size} />
            )
          }
        }}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "#351401"
              },
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="DrawerScreens"
              options={{
                headerShown: false,
              }}
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="MealsOverview"
              // options={({ _, route }) => {
              //   const { categoryId } = route.params;
                
              //   return {
              //     title: categoryId,
              //   }
              // }}
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesProvider> */}
    </>
  );
};
