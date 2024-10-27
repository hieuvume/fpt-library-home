type Props = {
  modalKey: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const BaseModal: React.FC<Props> = ({
  modalKey,
  title,
  children,
  className = "max-w-[600px] top-[10%]",
}) => {
  return (
    <>
      <div
        className={`modal hidden`}
        data-modal="true"
        data-modal-disable-scroll="false"
        id={modalKey}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={{ zIndex: 90 }}
      >
        <div
          className={`modal-content ${className}`}
          id={`${modalKey}_content`}
        >
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button
              className="btn btn-xs btn-icon btn-light"
              data-modal-dismiss="true"
            >
              <i className="ki-outline ki-cross"></i>
            </button>
          </div>

          <div
            className="modal-body"
            id={`${modalKey}_body`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export { BaseModal };
