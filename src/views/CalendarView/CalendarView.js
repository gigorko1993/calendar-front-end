import "react-toastify/dist/ReactToastify.css";
import CalendarTable from "../../components/ContactForm";
import s from "./ContactView.module.css";

export default function ContactsView() {
  return (
    <div className={s.container}>
      <CalendarTable />
    </div>
  );
}
