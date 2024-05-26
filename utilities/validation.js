import * as yup from 'yup';


const contactFormObject = {
    first_name: yup.string().required('First Name is a required field').trim(),
    last_name: yup.string().trim(),
    email: yup.string().required('Email is a required field').email('Must be a valid email'),
    phone: yup.string().required('Phone is a required field').matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits').trim(),
    gst: yup.string().required('State is a required field').trim(),
    city: yup.string().required('City is a required field').trim(),
    pincode: yup
        .string().required('Pincode is a required field').matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits').trim(),
    personType: yup
        .string()
        .oneOf(['PERSON', 'BUSINESS'], 'Please select an option')
        .defined('Please select an option'),
    propertyType: yup
        .string()
        .oneOf(['COMMERCIAL BUILDING', 'HOTEL/RESTAURANT', 'PLAIN LAND'], 'Please select an option')
        .defined('Please select an option'),
    haveLand: yup.boolean('Please select an option').required('Please select an option'),
};


export const contactFormSchema = yup
    .object(contactFormObject)
    .required();

export const completeContactFormSchema = yup.object({
    ...contactFormObject,
    willingToInvest: yup.boolean('Please select an option').required('Please select an option'),
    moreThan10Lakh: yup.boolean('Please select an option').required('Please select an option'),
    fileUrl: yup.string().default("").trim(),
}).required();