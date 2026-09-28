import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { User } from "../types/User";

type UserFormProps = {
  user: User | null;
  onSave: (user: Omit<User, "id">) => void;
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits")
    .required("Phone is required"),
});

function UserForm({ user, onSave }: UserFormProps) {
  return (
    <Formik
      initialValues={{
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSave}
      enableReinitialize
    >
      <Form>
        <div>
          <Field
            name="name"
            type="text"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="p" />
        </div>

        <div>
          <Field
            name="email"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <Field
            name="phone"
            type="text"
            placeholder="Phone"
          />
          <ErrorMessage name="phone" component="p" />
        </div>

        <button type="submit">
          {user ? "Update User" : "Add User"}
        </button>
      </Form>
    </Formik>
  );
}

export default UserForm;