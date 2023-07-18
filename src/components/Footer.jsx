import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full text-center dark:bg-black border-t border-gray-500 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          &copy; 2023 Kasim saifi. All rights reserved. | Powered by{' '}
          <Link
            href="https://kasimsaifi.tech"
            className="text-neutral-800 dark:text-neutral-400"
          >
            Kasim saifi
          </Link>
        </div>
        <div className="pb-4 text-center text-neutral-700 dark:text-neutral-200">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/privacy-policy" className="text-neutral-800  hover:text-purple-500 dark:hover:text-purple-500 hover:underline dark:text-neutral-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="text-neutral-800 hover:text-purple-500 dark:hover:text-purple-500 hover:underline dark:text-neutral-400">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-cancellation-policy" className="text-neutral-800 hover:text-purple-500 dark:hover:text-purple-500 hover:underline dark:text-neutral-400">
                Refund and Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
