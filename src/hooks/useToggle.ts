import {useState} from "react";

export const useToggle = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)

    const toggleOpen = () => {
        setIsOpen(prevState => !prevState)
    }

    return { isOpen, toggleOpen }
}
