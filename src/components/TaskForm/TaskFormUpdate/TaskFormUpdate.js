import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTaskOperation } from "../../../redux/tasks/taskOperations";
import { getTaskOperation } from "../../../redux/tasks/taskOperations";

import s from "../TaskForm.module.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Modal from "react-modal";

const TaskFormUpdate = ({ visible, start, duration, title }) => {
  const [startUpdate, setStartUpdate] = useState(start);
  const [durationUpdate, setDurationUpdate] = useState(duration);
  const [titleUpdate, setTitleUpdate] = useState(title);
  const [open, setOpen] = useState(visible);

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "start":
        setStartUpdate(value);
        break;

      case "duration":
        setDurationUpdate(value);
        break;

      case "title":
        setTitleUpdate(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateTaskOperation({ startUpdate, durationUpdate, titleUpdate }));
    dispatch(getTaskOperation());
    setOpen(!open);
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={onSubmit}
        overlayClassName="modal-overlay"
        contentLabel="Example Modal"
        className="open"
        htmlOpenClassName={s.openedModal}
      >
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
          <Fab aria-label="Add" color="primary" type="submit" size="small">
            <AddIcon />
          </Fab>
        </form>
      </Modal>
    </>
  );
};

export default TaskFormUpdate;
