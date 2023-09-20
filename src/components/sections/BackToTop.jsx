import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const BackToTop = () => {
  return (
    <section>
      <div className="container mx-auto text-center py-6">
        <button className="border rounded-lg border-yellow-300 bg-yellow-100 py-4 px-6">
          Back To Top
          <FaAngleDoubleUp className="inline ml-7" />
        </button>
      </div>
    </section>
  );
};

export default BackToTop;
