import { object, string, date } from 'yup';

export const schema = object({
    title: string().required('Title is required'),
    description: string().required('Description is required'),
    deadline: date().nullable().transform(
        (value, originalValue) => {
            return originalValue === '' ? null : new Date(originalValue);
        }
    ).required('Deadline is required'),
    id: string(date())
})