import * as Yup from "yup";

// Define the structure of the form data
interface FormData {
  userType: "individual" | "company"; // You can keep this field to track the user type if needed
  name: string;
  companyName: string; // Always require companyName
  phone: string;
  country: string;
  message: string;
  queryType: "sales" | "customer-service" | "general";
}

// Validation function
export const validateForm = (formData: FormData): Record<string, string> => {
  // Define the validation schema
  const schema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    companyName: Yup.string().trim().required("Company name is required"), // Always required
    phone: Yup.string()
      .matches(
        /^\+\d{10,15}$/,
        "Valid phone number with country code is required"
      )
      .required("Phone is required"),
    message: Yup.string()
      .trim()
      .min(10, "Message must be at least 10 characters long")
      .required("Message is required"),
    country: Yup.string().trim().required("Country is required"), // Always required
  });

  try {
    // Validate synchronously
    schema.validateSync(formData, { abortEarly: false });
    return {}; // No validation errors
  } catch (err: unknown) {
    // Handle validation errors
    if (err instanceof Yup.ValidationError) {
      const errors: Record<string, string> = {};
      err.inner.forEach((error) => {
        if (error.path) errors[error.path] = error.message;
      });
      return errors;
    }

    // Throw any unexpected errors
    throw err;
  }
};
