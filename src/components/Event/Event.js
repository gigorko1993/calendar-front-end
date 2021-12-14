import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTaskOperation,
  updateTaskOperation,
} from "../../redux/tasks/taskOperations";
import { calcEventPosition } from "../../helpers/calculatePosition";
import EventElement from "./EventElement";

const Event = ({ title, start, duration, right, width, id }) => {
  const { transform, height } = calcEventPosition(start, duration);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTaskOperation(id));
  };
  const handleUpdate = (id, payload) => {
    dispatch(updateTaskOperation(id, payload));
  };
  return (
    <>
      <EventElement
        transform={transform}
        height={height}
        width={width}
        transformX={right ? 100 : 0}
        taskId={id}
      >
        {title}
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => handleUpdate(id, width)}>Update</button>
      </EventElement>
    </>
  );
};

export default Event;
