import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOperation } from "../../redux/tasks/taskOperations";
// import { getTasks } from "../../redux/task/taskSelectors";
import getIsLoggedIn from "../../redux/auth/authSelectors";
import time from "../../helpers/time";
// import TimeScale from "../TimeScale";
// import style from "./Calendar.module.css";
// import EventCalendar from "../EventCalendar";
// import { appointments } from "./appointments";
// import maper from "../../helpers/maper";

const CalendarTable = () => {
  const dispatch = useDispatch();
  const memoizedCallback = useCallback(() => {
    dispatch(getTaskOperation());
  }, [dispatch]);

  const isLogin = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLogin) {
      memoizedCallback();
    }
  }, [isLogin, memoizedCallback]);
  //   const appointments = useSelector(getTasks);
  //   const eventWithPositions = appointments.length > 0 && maper(appointments);
  return (
    <div>
      <div>
        <div>
          {time.map((time) => (
            <div key={time}></div>
          ))}
        </div>
      </div>
      {/* <div className={style.containerEvent}>
        <div>
          {timePm.map((time) => (
            <div key={time} className={style.timeBox}>
              <div className={style.scaleTieme}>
                <TimeScale time={time} />
              </div>
            </div>
          ))}
        </div>
        {eventWithPositions && (
          <div className={style.boxEvent}>
            {eventWithPositions.map(
              (event) =>
                event.start >= 300 && (
                  <EventCalendar
                    key={event._id}
                    start={event.start-300}
                    duration={event.duration}
                    title={event.title}
                    right={event.right}
                    width={event.width}
                    id={event._id}
                  />
                )
            )}
          </div>
        )}
      </div> */}
    </div>
  );
};
export default CalendarTable;
