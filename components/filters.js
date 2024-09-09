import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function Filter() {
  return (
    <>
      <View style={styles.filter}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Button Pressed!")}
          >
            <Text style={styles.buttonText}>{"All"}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Button Pressed!")}
          >
            <Text style={styles.buttonText}>{"Panding"}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Button Pressed!")}
          >
            <Text style={styles.buttonText}>{"Completed"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: 10,
    marginBottom: 10,
  },
});
