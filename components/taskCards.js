import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Animated } from "react-native";

const TaskCard = (props) => {
  const { title, status, dueDate, id, description } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    let finalValue = isExpanded ? 0 : 1;
    setIsExpanded(!isExpanded);
    Animated.timing(animation, {
      toValue: finalValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const cardHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const getStatus = (status) => {
    if (status === "Panding") {
      return styles.pandingTask;
    }
    if (status === "Completed") {
      return styles.completedTask;
    }
    return styles.inProgress;
  };

  return (
    <TouchableOpacity
      style={[styles.card, styles.completedTask, getStatus(status)]}
      key={id}
      onPress={() => toggleExpand()}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.statusStyle}>{`Status: ${status} `}</Text>
      <Text style={styles.dueDate}>{`Due Date: ${dueDate}`}</Text>

      <Animated.View
        style={{
          height: cardHeight,
          opacity,
          marginVertical: 10,
          borderTopWidth: 1,
          borderBlockColor: "#ddd",
        }}
      >
        <Text style={{ fontWeight: "bold", marginVertical: 5 }}>Summary:</Text>
        <Text style={styles.cardContent}>{description}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFDF9",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
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
  },
  dueDate: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  cardContent: {
    paddingVertical: 10,
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "400",
  },
  completedTask: {
    borderColor: "green",
    borderWidth: 2,
  },
  inProgress: {
    borderColor: "#61dafb",
    borderWidth: 2,
  },
  pandingTask: {
    borderColor: "yellow",
    borderWidth: 2,
  },
});

export default TaskCard;
