import { Router } from 'express';
import axios from 'axios';
import PaytmChecksum from 'paytmchecksum';

const router = Router();

router.post('/initialize-payment', async (req, res) => {
  try {
    const { amount, orderId, customerId, callbackUrl } = req.body;

    const paytmParams = {
      MID: 'YOUR_MERCHANT_ID',
      WEBSITE: 'WEBSTAGING',
      CHANNEL_ID: 'WEB',
      INDUSTRY_TYPE_ID: 'Retail',
      ORDER_ID: orderId,
      CUST_ID: customerId,
      TXN_AMOUNT: amount,
      CALLBACK_URL: `http://localhost:3000${callbackUrl}`,
      EMAIL: 'customer@example.com',
      MOBILE_NO: '9876543210',
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams),
      'YOUR_MERCHANT_KEY'
    );

    const paytmParamsWithChecksum = {
      ...paytmParams,
      CHECKSUMHASH: checksum,
    };

    res.json(paytmParamsWithChecksum);
  } catch (error) {
    console.error('Error initializing payment:', error);
    res.status(500).json({ error: 'Failed to initialize payment' });
  }
});

router.post('/callback', async (req, res) => {
  try {
    const responseData = req.body;

    const isValidChecksum = await PaytmChecksum.verifySignature(
      responseData,
      'YOUR_MERCHANT_KEY',
      responseData.CHECKSUMHASH
    );

    if (isValidChecksum) {
      // Payment successful, process the order and update your database accordingly
      console.log('Payment successful');
    } else {
      // Payment failed or tampered with
      console.log('Payment failed or tampered with');
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('Error processing Paytm callback:', error);
    res.sendStatus(500);
  }
});

export default router;
