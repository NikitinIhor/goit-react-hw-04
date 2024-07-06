import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    values.text.length === 0
      ? toast.error("Please enter text....")
      : toast.dismiss();
    onSearch(values.text);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <button>
            <IoSearchOutline className={css.icon} />
          </button>
          <Field
            className={css.input}
            type="text"
            name="text"
            placeholder="Search images and photos"
          />
          <Toaster
            containerStyle={{
              top: 80,
            }}
          />
        </Form>
      </Formik>
    </header>
  );
}
