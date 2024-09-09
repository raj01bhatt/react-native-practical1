import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import TaskView from "./components";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#61dafb" />
        <TaskView />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5F2",
    justifyContent: "center",
    width: "100%",
  },
});
