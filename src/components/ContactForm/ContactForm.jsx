import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import ModalForm from "../ModalForm/ModalForm";
import toast from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addContact({ name: values.name, number: values.number }))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!");
      });
    // .catch(() => {
    //   toast.error("Failed to add contact.");
    // });
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
