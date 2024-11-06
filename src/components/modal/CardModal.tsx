import React from "react";

type Props = {
  modalKey: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  isOpen: boolean; // Controls visibility
  onClose: () => void; // Function to close the modal
};

const CardModal: React.FC<Props> = ({
  modalKey,
  title,
  children,
  className = "max-w-[600px] ",
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="container-fixed">
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
           style={{ zIndex: 90 }}
          onClick={onClose}
        >
          <div
            className={`modal-content bg-white rounded-lg shadow-lg p-4 ${className}`}
            id={`${modalKey}_content`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="modal-title font-semibold text-lg">{title}</h3>
              <button
                className="btn btn-xs btn-icon btn-light text-gray-600"
                onClick={onClose}
              >
                <i className="ki-outline ki-cross"></i>
              </button>
            </div>

            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export { CardModal };
