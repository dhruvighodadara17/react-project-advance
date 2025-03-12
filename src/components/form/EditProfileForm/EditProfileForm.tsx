import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
import { validationSchema } from '../../../utils/validationSchema'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { updateProfile } from '../../features/auth/authActions'

// Import CSS
import styles from './EditProfileForm.module.css'

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Miami',
  'San Francisco',
  'Seattle',
  'Boston',
  'Washington D.C.',
  'Philadelphia',
  'Dallas',
  'Atlanta',
]

const EditProfileForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { user } = useAppSelector((state) => state.auth)

  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const initialValues = {
    // ✅ Add this line
    fullName: user?.username || '',
    birthDate: '',
    city: '',
    profilePhoto: null as File | null,
    resume: null as File | null,
  }

  const onSubmit = async (values: typeof initialValues) => {
    const formData = new FormData()

    formData.append('fullName', values.fullName)
    formData.append('birthDate', values.birthDate)
    formData.append('city', values.city)
    if (values.profilePhoto) formData.append('profilePhoto', values.profilePhoto)
    if (values.resume) formData.append('resume', values.resume)

    if (!user?.id) {
      alert('User not found!')
      return
    }

    const result = await dispatch(updateProfile({ userId: user.id, formData }))

    if (updateProfile.fulfilled.match(result)) {
      alert('Profile successfully updated! ✅')
      navigate('/dashboard')
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Edit Profile</h1>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <label>Profile Photo (PNG/JPG):</label>
            <div className={styles.imageUploadBox}>
              <label htmlFor="profilePhoto" className={styles.imageCircle}>
                {previewImage ? (
                  <img src={previewImage} alt="Profile Preview" className={styles.imagePreview} />
                ) : (
                  <span className={styles.placeholderText}>Upload Image</span>
                )}
              </label>

              <input
                type="file"
                id="profilePhoto"
                accept="image/png, image/jpeg"
                className={styles.hiddenInput}
                onChange={(e) => {
                  const file = e.currentTarget.files?.[0] as File | null
                  setFieldValue('profilePhoto', file)

                  if (file) {
                    const reader = new FileReader()
                    reader.onload = (event) => setPreviewImage(event.target?.result as string)
                    reader.readAsDataURL(file)
                  } else {
                    setPreviewImage(null)
                  }
                }}
              />
            </div>

            <ErrorMessage name="profilePhoto" component="p" className={styles.errorMessage} />

            <label>Full Name:</label>
            <Field name="fullName" placeholder="Enter your full name" />
            <ErrorMessage name="fullName" component="p" className={styles.errorMessage} />

            <label>Date of Birth:</label>
            <Field type="date" name="birthDate" />
            <ErrorMessage name="birthDate" component="p" className={styles.errorMessage} />

            <label>City:</label>
            <Field as="select" name="city">
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Field>
            <ErrorMessage name="city" component="p" className={styles.errorMessage} />

            <label>Resume (PDF only):</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.currentTarget.files?.[0] as File | null
                setFieldValue('resume', file)
              }}
            />
            <ErrorMessage name="resume" component="p" className={styles.errorMessage} />

            <button type="submit" className={styles.submitButton}>
              Save Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EditProfileForm
