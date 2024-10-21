type Props = {
    modalKey: string
    title?: string
    description?: string
    children: React.ReactNode
}

const BaseModal: React.FC<Props> = ({ modalKey, title, description, children }) => {
    return (
        <>
            <div className="container-fixed">
                <div
                    className={`modal modal-open:!flex hidden`}
                    data-modal="true"
                    data-modal-disable-scroll="false"
                    id={modalKey}
                    role="dialog"
                    aria-modal="true"
                    tabIndex={-1}
                    style={{ zIndex: 90 }}
                >
                    <div
                        className="modal-content pt-7.5 my-[3%] w-full container-fixed px-5 overflow-hidden"
                        id={`${modalKey}_content`}
                    >
                        <div className="modal-header p-0 border-0">
                            {/* Container */}
                            <div className="container-fixed">
                                <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                                    <div className="flex items-center justify-between flex-wrap grow gap-5">
                                        <div className="flex flex-col justify-center gap-2">
                                            <h1 className="text-xl font-semibold leading-none text-gray-900">
                                                {title}
                                            </h1>
                                            <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
                                                {description}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <button
                                                className="btn btn-sm btn-light"
                                                data-modal-dismiss="true"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="modal-body scrollable-y py-0 mb-5 pl-6 pr-3 mr-3"
                            id={`${modalKey}_body`}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { BaseModal }
