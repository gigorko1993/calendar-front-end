import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOperation } from "../../redux/tasks/taskOperations";
// import tasksSelectors from "../../redux/tasks/taskSelectors";
import authSelectors from "../../redux/auth/authSelectors";
import time from "../../helpers/time";
import eventList from "../../helpers/renderEventList";

const CalendarTable = () => {
  const dispatch = useDispatch();
  const memoizedCallback = useCallback(() => {
    dispatch(getTaskOperation());
  }, [dispatch]);

  const isLogin = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLogin) {
      memoizedCallback();
    }
  }, [isLogin, memoizedCallback]);
  // const taskList = useSelector(tasksSelectors.getTasks);
  return (
    <div>
      <div>
        <div>
          {time.map((time) => (
            <div key={time}>
              <div>{time}</div>
              <div>Event</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CalendarTable;
