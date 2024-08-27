import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.gridContainer}>
      {contacts.map((contact) => (
        <li className={css.item} key={task.id}>
          <Contact data={task} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
}
