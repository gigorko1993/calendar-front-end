import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTaskOperation } from "../../redux/tasks/taskOperations";
import { calcEventPosition } from "../../helpers/calculatePosition";
import EventElement from "./EventElement";
import TaskFormUpdate from "../TaskForm/TaskFormUpdate/TaskFormUpdate";

const Event = ({ title, start, duration, right, width, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { transform, height } = calcEventPosition(start, duration);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTaskOperation(id));
  };
  const handleUpdate = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <EventElement
        transform={transform}
        height={height}
        width={width}
        start={start}
        duration={duration}
        title={title}
        right={right}
        transformX={right ? 93 : 0}
        id={id}
        key={id}
      >
        {title}
        <button onClick={() => handleDelete(id)}>Delete</button>
        <TaskFormUpdate
          visible={isOpen}
          start={start}
          duration={duration}
          title={title}
          id={id}
          key={id}
        />
        <button onClick={() => handleUpdate()}>Update</button>
      </EventElement>
    </>
  );
};

export default Event;
