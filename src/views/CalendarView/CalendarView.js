import "react-toastify/dist/ReactToastify.css";
import CalendarTable from "../../components/CalendarTable/CalendarTable";
import s from "./CalendarView.module.css";

export default function CalendarView() {
  return (
    <div className={s.container}>
      <CalendarTable />
    </div>
  );
}
