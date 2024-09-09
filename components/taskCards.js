import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskCard = (props) => {
  const { title, status, dueDate, id } = props;
  return (
    <TouchableOpacity
      style={styles.card}
      key={id}
      onPress={() => props.openModal()}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.statusStyle}>{`Status: ${status} `}</Text>
      <Text style={styles.dueDate}>{`Due Date: ${dueDate}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFDF9",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  statusStyle: {
    fontSize: 16,
    // color: props?.status === "Completed" ? "green" : "red",
  },
  dueDate: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});

export default TaskCard;
