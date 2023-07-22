import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { HiOutlineChevronRight } from 'react-icons/hi';
import React from 'react';

const Breadcrumb = ({ paths }) => {
  return (
    <div className="flex items-center text-gray-500 flex-wrap">
      <FiHome className="mr-1 w-5 h-5" />
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <HiOutlineChevronRight className="mx-2 sm:inline" />}
          {path.url ? (
            <Link href={path.url}>
              <p className="hover:text-gray-800">{path.label}</p>
            </Link>
          ) : (
            <span>{path.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
