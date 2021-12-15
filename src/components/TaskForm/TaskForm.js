import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postTaskOperation } from "../../redux/tasks/taskOperations";

import s from "./TaskForm.module.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

const TaskForm = () => {
  const [start, setStart] = useState("");
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "start":
        setStart(value);
        break;

      case "duration":
        setDuration(value);
        break;

      case "title":
        setTitle(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(postTaskOperation({ start, duration, title }));
    setStart("");
    setDuration("");
    setTitle("");
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.thumb}>
        <TextField
          id="standard-basic"
          label="Start"
          className={s.input}
          onChange={onChange}
          type="number"
          value={start}
          name="start"
          pattern="\([0-9]|[1-9][0-9]|[1-3][0-9]{2}|40[0-5])"
          title="Start time should be in range 0-405"
          required
        />
        <TextField
          id="standard-basic"
          label="Duration"
          className={s.input}
          onChange={onChange}
          type="number"
          name="duration"
          pattern="\(1[0-9]|[2-9][0-9]|[12][0-9]{2}|3[0-8][0-9]|39[0-5])"
          title="Duration time should be in range 10-395"
          value={duration}
          required
        />
        <TextField
          id="standard-basic"
          label="Title"
          className={s.input}
          onChange={onChange}
          type="text"
          name="title"
          value={title}
          required
        />
      </div>
      <Fab aria-label="Add" color="primary" type="submit">
        <AddIcon />
      </Fab>
    </form>
  );
};

export default TaskForm;
