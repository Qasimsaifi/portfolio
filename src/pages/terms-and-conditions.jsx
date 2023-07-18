import NavBar from "@/components/Navbar";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
    <NavBar/>
      <div className="max-w-3xl mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="mb-4">
          By accessing or using this website, you agree to be bound by the
          following terms and conditions:
        </p>
        <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
        <p className="mb-4">
          You must be at least 18 years old to use our services or make
          purchases through our website. The content on this website is for
          informational purposes only and should not be considered professional
          advice. We reserve the right to modify or terminate our services at
          any time without prior notice.
        </p>
        <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
        <p className="mb-4">
          All content, including text, images, and graphics, on this website is
          protected by intellectual property laws and belongs to us. You may not
          reproduce, distribute, or modify any part of the website without our
          prior written consent.
        </p>
        <h2 className="text-2xl font-bold mb-4">Payment and Transactions</h2>
        <p className="mb-4">
          When making payments through Razorpay, you agree to abide by their
          terms and conditions. We do not store any payment information on our
          servers. All transactions are processed securely through Razorpay's
          payment gateway.
        </p>
        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          We strive to provide accurate and up-to-date information on this
          website. However, we do not warrant the completeness, reliability, or
          accuracy of the content. You use the website and its services at your
          own risk, and we shall not be liable for any damages or losses
          resulting from your use of the website.
        </p>
        <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold us harmless from any claims,
          liabilities, or expenses arising out of your use of the website or
          violation of these terms and conditions.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Governing Law and Jurisdiction
        </h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of your jurisdiction. Any disputes or claims arising out
          of or in connection with these terms and conditions shall be subject
          to the exclusive jurisdiction of the courts in your jurisdiction.
        </p>
        <p className="mb-8">
          If you have any questions about our terms and conditions, please
          contact us at kasimthecoder@gmail.com.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </>
  );
}
