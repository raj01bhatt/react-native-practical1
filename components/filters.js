import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function Filter({
  allTasks,
  pandingTask,
  completedTask,
  setFilter = () => {},
  filter,
}) {
  return (
    <>
      <View style={styles.filter}>
        <View>
          <TouchableOpacity
            style={[styles.button, filter === "All" && styles.selected]}
            onPress={() => setFilter("All")}
          >
            <Text style={styles.buttonText}>
              {"All"} ({allTasks})
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, filter === "Panding" && styles.selected]}
            onPress={() => setFilter("Panding")}
          >
            <Text style={styles.buttonText}>
              {"Panding"} ({pandingTask})
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, filter === "Completed" && styles.selected]}
            onPress={() => setFilter("Completed")}
          >
            <Text style={styles.buttonText}>
              {"Completed"} ({completedTask})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F7F5F2",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "30%",
  },
  buttonText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  selected: {
    borderColor: "#61dafb",
    borderWidth: 2,
  },
});
