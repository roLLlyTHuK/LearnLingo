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
  LoginFormContainer,
} from './LoginForm.styled';

const LoginForm = ({ isModalOpen, closeModal }) => {
  const schema = yup.object().shape({
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

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
    alert('Form submitted successfully!');
  };

  if (!isModalOpen) return null;

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <LoginFormContainer>
            <CloseBtn onClick={closeModal}>
              <IoClose size={32} />
            </CloseBtn>
            <HeaderBox>
              <h2>Log In</h2>
              <p>
                Welcome back! Please enter your credentials to access your
                account and continue your search for an teacher.
              </p>
            </HeaderBox>

            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  type="password"
                  {...register('password')}
                  className={errors.password ? 'error' : ''}
                  placeholder=" "
                />
                <label className={errors.password ? 'error' : ''}>
                  Password
                </label>
                {errors.phone && (
                  <ErrorMessage>{errors.phone.message}</ErrorMessage>
                )}
              </Field>

              <Button type="submit">Log In</Button>
            </Form>
          </LoginFormContainer>
        </Modal>
      )}
    </>
  );
};

export default LoginForm;