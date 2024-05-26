import { create } from 'zustand';

const MODALS = ["WILLING_TO_INVEST", "MORE_THAN_10LAKH", "THANKYOU_MODAL"]

const useModal = create((set) => ({
    modal: null,
    openModal: (modalName) => {
        if (MODALS.includes(modalName)) {
            set({ modal: modalName });
        } else {
            throw new Error("Invalid Modal Name");
        }
    },
    closeModal: () => set({ modal: null }),
}));


export default useModal;