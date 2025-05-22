import { object, string, date } from 'yup';

export const schema = object({
    title: string().required('Title is required'),
    description: string().required('Description is required'),
    deadline: date().required(),
    id: date()
})