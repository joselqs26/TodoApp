import React from "react";

const useModal = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    return {openModal, toggleModal}
};

export { useModal };
