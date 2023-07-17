import React, { useEffect } from 'react';

const RazorpayPaymentButton = ({paymentId}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', paymentId);
    script.async = true;

    const formElement = document.querySelector('form');
    formElement.appendChild(script);

    return () => {
      formElement.removeChild(script);
    };
  }, []);

  return null;
};

export default RazorpayPaymentButton;
