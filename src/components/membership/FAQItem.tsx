import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
      <button className="accordion-toggle py-4" onClick={toggle}>
        <span className="text-base text-gray-900">{question}</span>
        <i className={`ki-filled ${isOpen ? 'ki-minus' : 'ki-plus'} text-gray-600 text-sm`} />
      </button>
      {isOpen && (
        <div className="accordion-content">
          <div className="text-gray-700 text-md pb-4">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
