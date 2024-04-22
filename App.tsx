import { Header } from "@/components/Header";
import { Home } from "@/screens/Home";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900 px-2">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Home />
    </View>
  );
}
