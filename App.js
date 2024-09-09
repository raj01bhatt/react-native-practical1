import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import TaskView from "./components";
import { SafeAreaView, ScrollView } from "react-native";
import { View } from "react-native";
import Filter from "./components/filters";
import DetailsModal from "./components/detailsModal";

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <SafeAreaView style={styles.container}>
        <DetailsModal />
        <Filter />
        <ScrollView>
          <TaskView />
        </ScrollView>
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
  button: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 40,
    marginBottom: 10,
  },
});
