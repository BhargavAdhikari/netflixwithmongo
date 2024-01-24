import * as Yup from "yup";

export let addUserSchema = Yup.object({
  firstName: Yup.string().required("firstname is required").trim().max(55),
  lastName: Yup.string().required("last name is required").trim().max(60),
  email: Yup.string()
    .email("email must be valid")
    .required("email is required")
    .max(70)
    .lowercase()
    .trim(),
  gender: Yup.string().nullable().oneOf(["male", "female", "others"]),
});
