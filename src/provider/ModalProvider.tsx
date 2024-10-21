import { FC, useState, createContext, useContext, ReactNode } from 'react'

type ModalContextProps = {
    data: any
    setData: (data: any) => void
    modal: string | undefined
    setModal: (modal: string | undefined) => void
    disableModal: () => void
    isModalOpen: (type: string) => boolean
}

const initialModalContext: ModalContextProps = {
    data: {},
    setData: () => { },
    modal: undefined,
    setModal: () => { },
    disableModal: () => { },
    isModalOpen: () => false,
}

const ModalContext = createContext<ModalContextProps>(initialModalContext)

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<string | undefined>(undefined)
    const [data, setData] = useState<any>({})

    const disableModal = () => {
        setModal(undefined)
    }

    const isModalOpen = (type: string) => {
        return modal !== undefined && modal === type
    }
    return (
        <ModalContext.Provider
            value={{
                data,
                setData,
                modal,
                setModal,
                disableModal,
                isModalOpen,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

const useModalNoType = () => useContext(ModalContext)

function useModal<T>() {
    const { data, setData, modal, setModal, disableModal, isModalOpen } = useModalNoType();

    return {
        data: data as T,
        setData: (newData: T) => setData(newData),
        modal,
        setModal,
        disableModal,
        isModalOpen,
    };
}

export { ModalProvider, useModal }
