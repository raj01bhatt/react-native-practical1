import React, { useState } from "react";
import TaskCard from "./taskCards";
import { taskData } from "./common";
import { Button, StyleSheet, View } from "react-native";
import DetailsModal from "./detailsModal";

const TaskView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    console.log("pressed");
    setModalVisible(!modalVisible);
  };
  return (
    <>
      {taskData.map((task) => (
        <TaskCard
          id={task.id}
          title={task.title}
          status={task.status}
          dueDate={task.dueDate}
          openModal={() => openModal(!modalVisible)}
        />
      ))}
      <DetailsModal
        modalVisible={modalVisible}
        setModalVisible={(val) => setModalVisible(val)}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TaskView;
