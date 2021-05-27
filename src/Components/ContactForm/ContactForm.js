import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import contactsOperations from "../../Redux/Phonebook/contacts-operations";
import contactsSelectors from "../../Redux/Phonebook/contacts-selectors";
import { useDispatch, useSelector } from "react-redux";

export default function ContactForm() {
  const [contactName, setContactName] = useState("");
  const [number, setNumber] = useState("");
  const contactsIn = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    setContactName(event.currentTarget.value);
  };
  const handleChangeNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contactsIn.find(({ name }) => name === contactName)) {
      alert(contactName + "is already in contacts");
      return;
    }
    dispatch(
      contactsOperations.addContact({ name: contactName, number: number })
    );
    setContactName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={styles.inputForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={contactName}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Phone
        <input
          className={styles.inputForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button className={styles.btnAdd} type="submit">
        Add Contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  submitted: PropTypes.func,
  contactsIn: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
};
