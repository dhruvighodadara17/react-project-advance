import * as Yup from 'yup'

export const signupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone is required'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .required('Address is required'),
})

export const loginSchema = Yup.object().shape({
  identifier: Yup.string().required('Username or email is required'),
  password: Yup.string().required('Password is required'),
})

// Validation Schema for Profile Form
export const validationSchema = Yup.object({
  fullName: Yup.string()
    // .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters'),

  birthDate: Yup.date()
    // .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),

  city: Yup.string(),
  // required('Please select a city'),

  profilePhoto: Yup.mixed<File>()
    // .required('Profile photo is required')
    .test(
      'fileFormat',
      'Only PNG/JPG files are allowed',
      (value) => value && ['image/png', 'image/jpeg'].includes(value.type),
    )
    .test(
      'fileSize',
      'File size must be less than 2MB',
      (value) => value && value.size <= 2 * 1024 * 1024,
    ),

  resume: Yup.mixed<File>()
    // .required('Resume is required')
    .test(
      'fileFormat',
      'Only PDF files are allowed',
      (value) => value && value.type === 'application/pdf',
    )
    .test(
      'fileSize',
      'File size must be less than 5MB',
      (value) => value && value.size <= 5 * 1024 * 1024,
    ),
})
