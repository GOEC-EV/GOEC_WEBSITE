// create a zustand store for the contact form
import { completeContactFormSchema } from '@/utilities/validation';
import { create } from 'zustand';


const useContactFormStore = create((set) => ({
    formData: {},
    file: null,
    setFormData: (data) => set((state) => ({
        formData: {
            ...state.formData,
            ...data,
        }
    })),
    setFile: (file) => set((state) => ({ ...state, file })),
    clearFormData: () => set(() => ({ formData: {}, file: null })),
    sendData: (successFunc, errorFunc) => set(async (state) => {
        try {
            const data = await completeContactFormSchema.validate(state.formData)
            const config = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            };

            const response = await fetch(`/api/applyForCharging`, config);
            const result = await response.json();

            if (result?.status === 'success') {
                successFunc()
            } else {
                errorFunc(result?.message ?? "Failed to submit")
            }

        } catch (e) {
            errorFunc(e.message ?? "Failed to submit")
        }
    })
}));
export default useContactFormStore;