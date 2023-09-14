import { insertData, getData } from "@/lib/dbActions";

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
      <div className="p-6 max-w-md mx-auto rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center  mb-8">Contact Us</h2>
        <img
          src="https://github.com/Qasimsaifi/image-host/blob/main/iOS-17-wallpaper-dark.jpg"
          alt=""
        />
        <form action={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-sm"
              name="fullName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="input input-bordered w-full max-w-sm"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="input input-bordered w-full max-w-sm "
              name="subject"
              id="subject"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              className="textarea textarea-bordered w-full max-w-sm"
              placeholder="Your message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="btn w-full max-w-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
