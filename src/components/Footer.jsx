import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font fixed bottom-0 left-0 w-full">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <span className="ml-3 text-xl">Qasim</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 qasim —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@qasimsaifi</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            
      <a  href="https://github.com/qasimsaifi" className='ml-3'>Github</a>
      <a href="https://instagram.com/qasim_webdev" className='ml-3'>Instagram</a>
    </span>
  </div>
</footer>
</>
);
};

export default Footer;
