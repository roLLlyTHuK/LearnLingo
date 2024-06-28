import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../Modal/Modal';

import { IoClose } from 'react-icons/io5';
import {
  Button,
  CloseBtn,
  ErrorMessage,
  Field,
  Form,
  HeaderBox,
  RegistrationFormContainer,
  ShowBtn,
} from './RegistrationForm.styled';
import { useAuth } from '../../context/AuthContext';
import { firestore } from '../../firebase';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import useNotification from '../../hooks/useNotification';

const RegistrationForm = ({ isModalOpen, closeModal }) => {
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const notify = useNotification();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: yup
      .string()
      .email('Invalid email. Please enter a valid email')
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Invalid email')
      .required('Email is required'),

    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async ({ name, email, password }, e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      const auth = getAuth();
      const user = auth.currentUser;
      await updateProfile(user, { displayName: name });
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
        name: user.displayName,
        id: user.uid,
        favorites: [],
      });
      closeModal();
      notify('Registration successful! Welcome to our platform!', 'success');
    } catch (error) {
      console.error('Error signing up:', error);
      notify(`Sorry, something went wrong. ${error.message}`, 'error');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  if (!isModalOpen) return null;

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <RegistrationFormContainer>
            <CloseBtn onClick={closeModal}>
              <IoClose size={32} />
            </CloseBtn>
            <HeaderBox>
              <h2>Sign Up</h2>
              <p>
                Welcome back! Please enter your credentials to access your
                account and continue your search for an teacher.
              </p>
            </HeaderBox>

            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Field>
                <input
                  type="text"
                  {...register('name')}
                  className={errors.name ? 'error' : ''}
                  placeholder=" "
                />
                <label className={errors.name ? 'error' : ''}>Name</label>
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </Field>
              <Field>
                <input
                  type="email"
                  {...register('email')}
                  className={errors.email ? 'error' : ''}
                  placeholder=" "
                />
                <label className={errors.email ? 'error' : ''}>Email</label>
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </Field>
              <Field>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={errors.password ? 'error' : ''}
                  placeholder=" "
                />
                <label className={errors.password ? 'error' : ''}>
                  Password
                </label>
                <ShowBtn type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </ShowBtn>
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
              </Field>

              <Button type="submit">Sing Up</Button>
            </Form>
          </RegistrationFormContainer>
        </Modal>
      )}
    </>
  );
};

export default RegistrationForm;
