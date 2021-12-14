import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOperation } from "../../redux/tasks/taskOperations";
import taskSelectors from "../../redux/tasks/taskSelectors";
import time from "../../helpers/time";
import eventList from "../../helpers/renderEventList";
import Event from "../Event/Event";
import TaskForm from "../TaskForm/TaskForm";
// import { test } from "./test";
import s from "./CalendarTable.module.css";

const CalendarTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTaskOperation());
  }, [dispatch]);

  const taskItems = useSelector(taskSelectors.getTasks);
  const countedEventPosition = taskItems.length > 0 && eventList(taskItems);

  return (
    <>
      <TaskForm />
      <div className={s.calendar}>
        <div className={s.container}>
          <div>
            {time.map((time) => (
              <div key={time} className={s.timeThumb}>
                <div className={s.scaleTime}>
                  <div className={s.itemTime}>{time}</div>
                </div>
              </div>
            ))}
          </div>
          {countedEventPosition && (
            <div className={s.eventThumb}>
              {countedEventPosition.map(
                (task) =>
                  task.start && (
                    <Event
                      key={task._id}
                      start={task.start}
                      duration={task.duration}
                      title={task.title}
                      right={task.right}
                      width={task.width}
                      id={task._id}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CalendarTable;
