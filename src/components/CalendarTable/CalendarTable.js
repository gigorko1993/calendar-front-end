import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOperation } from "../../redux/tasks/taskOperations";
import taskSelectors from "../../redux/tasks/taskSelectors";
import time from "../../helpers/time";
import eventList from "../../helpers/renderEventList";
import Event from "../Event/Event";
import TaskForm from "../TaskForm/TaskForm";
import s from "./CalendarTable.module.css";
import { v4 as uuidv4 } from "uuid";

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
              <div key={uuidv4()} className={s.timeThumb}>
                <div className={s.scaleTime}>
                  <div key={uuidv4()}>{time}</div>
                </div>
              </div>
            ))}
          </div>
          {countedEventPosition && (
            <div className={s.eventThumb}>
              {countedEventPosition.map(
                ({ id, start, duration, title, width, right }) => (
                  <Event
                    key={id}
                    start={start}
                    duration={duration}
                    title={title}
                    width={width}
                    right={right}
                    id={id}
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
