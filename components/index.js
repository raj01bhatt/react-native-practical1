import React, { useEffect, useState } from "react";
import TaskCard from "./taskCards";
import { taskData } from "./common";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Filter from "./filters";

const TaskView = () => {
  const [filter, setFilter] = useState("All");
  const [tasksData, setTaskData] = useState([]);
  const pandingTask = taskData.filter((task) => task.status === "Panding");
  const completedTask = taskData.filter((task) => task.status === "Completed");

  useEffect(() => {
    if (filter === "All") {
      setTaskData(taskData);
    } else if (filter === "Panding") {
      setTaskData(pandingTask);
    } else if (filter === "Completed") {
      setTaskData(completedTask);
    }
  }, [filter]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Filter
          allTasks={taskData.length}
          pandingTask={pandingTask.length}
          completedTask={completedTask.length}
          setFilter={(filter) => setFilter(filter)}
          filter={filter}
        />
        <ScrollView>
          {tasksData.map((task) => (
            <TaskCard
              id={task.id}
              title={task.title}
              status={task.status}
              dueDate={task.dueDate}
              description={task.description}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F7F5F2",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 20,
    paddingBottom: 0,
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

export default TaskView;
