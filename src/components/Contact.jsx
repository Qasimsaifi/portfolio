import { insertData, getData } from "@/lib/dbActions";
import {
  FadeContainer,
  FromButton,
  InputFieldFromLeft,
  InputFieldFromRight,
  TextareaField,
} from "./FormFields";

const Contact = async () => {
  async function handleSubmit(formData) {
    "use server";
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    await insertData(fullName, email, subject, message);
  }
  return (
    <div className="mb-20 mt-4 ">
      <FadeContainer>
        <div className="p-6 max-w-md mx-auto rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center  mb-8">
            Contact Us
          </h2>
          <form action={handleSubmit}>
            <div className="mb-4">
              <InputFieldFromLeft name="fullName" placeholder="Full Name" />
            </div>
            <div className="mb-4">
              <InputFieldFromRight
                name="email"
                placeholder="example@example.com"
              />
            </div>
            <div className="mb-4">
              <InputFieldFromLeft name="subject" placeholder="Enter subject" />
            </div>
            <div className="mb-4">
              <TextareaField placeholder="Your message" name="message" />
            </div>
            <div className="text-center mt-6">
              <FromButton />
            </div>
          </form>
        </div>
      </FadeContainer>
    </div>
  );
};

export default Contact;
