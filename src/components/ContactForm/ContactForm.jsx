import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import ModalForm from "../ModalForm/ModalForm";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      }),
    );
  };

  return (
    <ModalForm
      title="Add contact"
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      openBtnLabel="Add contact"
      submitBtnLabel="Submit"
    />
  );
};

export default ContactForm;
