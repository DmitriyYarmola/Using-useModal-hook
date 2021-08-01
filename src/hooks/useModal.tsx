import React  from 'react'

import {ModalTypes} from "../interfaces";
import {ImportModal, UploadModal} from "../components";
import {useToggle} from "./useToggle";

export const useModal = <T extends { [key: string]: any }>(type: ModalTypes, props: T) => {
    const {isOpen, toggleOpen} = useToggle()

    const modals = {
        import: ImportModal,
        upload: UploadModal
    } as {[key in ModalTypes]: React.FC<typeof props>}


    return { toggleOpen, isOpen, Modal: modals[type] }
}
