import "react-toastify/dist/ReactToastify.css";
import CalendarTable from "../../components/CalendarTable/CalendarTable";
import UserMenu from "../../components/UserMenu";
import s from "./CalendarView.module.css";

export default function CalendarView() {
  return (
    <div className={s.container}>
      <UserMenu />
      <CalendarTable />
    </div>
  );
}
