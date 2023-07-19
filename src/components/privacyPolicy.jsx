import Link from 'next/link';
import Footer from './Footer';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">
        Thank you for visiting our website. This privacy policy explains how we collect, use, and protect your personal information when you use our services, including the use of Google AdSense for ad serving and personalization.
      </p>
      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
      <p className="mb-4">
        We collect personal information such as your name, email address, and contact details when you submit a contact form, place an order, or sign up for our newsletter. We may also collect non-personal information such as browser type, IP address, and referring website.
      </p>
      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use the collected information to communicate with you, process your orders, provide customer support, improve our services, and send you relevant updates and promotions. We may also use your information for statistical analysis and market research purposes.
      </p>
      <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
      <p className="mb-4">
        We value your privacy and do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law. We may share your information with trusted service providers who assist us in operating our website, conducting business, or servicing you, as long as they agree to keep your information confidential.
      </p>
      <h2 className="text-2xl font-bold mb-4">Google AdSense</h2>
      <p className="mb-4">
        Our website uses Google AdSense, a third-party advertising service provided by Google. Google AdSense may use cookies and other tracking technologies to serve personalized ads based on your browsing activities and interests. You can learn more about how Google uses your data and how to manage your ad personalization preferences by visiting Google's <Link href="https://policies.google.com/technologies/partner-sites">Ads Personalization</Link> page.
      </p>
      <h2 className="text-2xl font-bold mb-4">Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or electronic storage method is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
      </p>
      <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
      </p>
      <h2 className="text-2xl font-bold mb-4">Changes to the Privacy Policy</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time without prior notice. Any changes will be effective immediately upon posting on this page. We encourage you to review this privacy policy periodically to stay informed about how we protect your information.
      </p>
      <p className="mb-8">
        If you have any questions or concerns about our privacy practices, please contact us at kasimthecoder@gmail.com
      </p>
      <Footer />
    </div>
  );
}
