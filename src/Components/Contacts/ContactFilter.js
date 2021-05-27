import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import contactsActions from "../../Redux/Phonebook/contacts-actions";
import contactsSelectors from "../../Redux/Phonebook/contacts-selectors";
import { useDispatch, useSelector } from "react-redux";

export default function ContactFilter() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(contactsSelectors.getFilter);

  return (
    <label>
      Filter contacts by name
      <input
        className={styles.search}
        type="text"
        value={searchQuery}
        onChange={(event) =>
          dispatch(contactsActions.changeFilter(event.currentTarget.value))
        }
      />
    </label>
  );
}

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
