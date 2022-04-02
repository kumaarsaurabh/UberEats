import { View, Text } from "react-native";
import RootNavigation from "./navigation";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import "react-native-gesture-handler";

export default function App() {
  return <RootNavigation />;
}
