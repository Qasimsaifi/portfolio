import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';
import Link from 'next/link';

export default function RefundCancellationPolicy() {
  return (
    <>
    <NavBar/>
    <div className="max-w-4xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-5xl font-bold mb-10">Refund and Cancellation Policy</h1>
      <h2 className="text-3xl font-bold mb-6">Refund Policy:</h2>
      <p className="text-xl mb-4">
        If you are not satisfied with your purchase, you may request a refund within 30 days of the purchase date. To initiate a refund, please contact our support team at kasimthecoder@gmail.com with your order details. We will process the refund as per our refund policy.
      </p>
      <p className="text-xl mb-4">
        Refunds will be issued in the original form of payment used for the purchase. Please allow 5-7 business days for the refund to reflect in your account.
      </p>
      <p className="text-xl mb-4">
        Please note that certain products or services may be exempt from our refund policy, such as personalized or custom-made items. Any exceptions to our refund policy will be clearly stated on the product or service page.
      </p>
      <h2 className="text-3xl font-bold mb-6">Cancellation Policy:</h2>
      <p className="text-xl mb-4">
        If you need to cancel an order, please contact us as soon as possible. We will do our best to accommodate your request if the order has not been processed or shipped. You can reach us at  kasimthecoder@gmail.com
      </p>
      <p className="text-xl mb-4">
        In the event that an order has already been processed or shipped, we may not be able to cancel it. In such cases, you may need to return the item(s) following our return policy, as outlined below.
      </p>
      <h2 className="text-3xl font-bold mb-6">Return Policy:</h2>
      <p className="text-xl mb-4">
        If you wish to return a product, please contact our support team within 14 days of receiving the item. We will provide you with instructions on how to return the product.
      </p>
      <p className="text-xl mb-4">
        To be eligible for a return, the item must be unused, in the same condition as received, and in its original packaging. Please note that certain products, such as perishable goods or intimate items, may not be eligible for return due to hygiene reasons.
      </p>
      <p className="text-xl mb-4">
        Once we receive the returned item, we will inspect it and notify you of the status of your refund. If the return is approved, we will initiate a refund to your original form of payment. Please allow 5-7 business days for the refund to reflect in your account.
      </p>
      <p className="text-xl mb-4">
        Please note that return shipping costs are the responsibility of the customer, unless the return is due to our error or a defective product.
      </p>
      <p className="text-xl mb-8">
        For any refund or cancellation related queries, please contact our support team at kasimthecoder@gmail.com
      </p>
      
    </div>
    <Footer/>
    </>
  );
}
