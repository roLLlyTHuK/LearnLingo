import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Popup.styled';
import Modal from '../Modal/Modal';
import {
  CloseBtn,
  ErrorMessage,
  Field,
  Form,
  HeaderBox,
  PopupContainer,
  Radio,
  Teacher,
} from './Popup.styled';

import { IoClose } from 'react-icons/io5';

const Popup = ({ isModalOpen, closeModal, teacher }) => {
  // Схема валидации для Yup
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Invalid email. Please enter a valid email')
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Invalid email')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(/^\+?[0-9]*$/, 'Phone number must be in format +380XXXXXXXXX')
      .min(13, 'Phone number must be in format +380XXXXXXXXX')
      .required('Phone is required'),
    reason: yup.string().required('Reason is required'),
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
          <PopupContainer>
            <CloseBtn onClick={closeModal}>
              <IoClose size={32} />
            </CloseBtn>
            <HeaderBox>
              <h2>Book trial lesson</h2>
              <p>
                Our experienced tutor will assess your current language level,
                discuss your learning goals, and tailor the lesson to your
                specific needs.
              </p>
              <Teacher>
                <img src={teacher.avatar_url} alt={teacher.name} />
                <div>
                  <p>Your teacher</p>
                  <h3>
                    {teacher.name} {teacher.surname}
                  </h3>
                </div>
              </Teacher>
            </HeaderBox>

            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-section">
                <h2>What is your main reason for learning English?</h2>
                <Radio>
                  <input
                    type="radio"
                    value="career"
                    {...register('reason')}
                    defaultChecked
                  />
                  Career and business
                </Radio>
                <Radio>
                  <input type="radio" value="kids" {...register('reason')} />
                  Lesson for kids
                </Radio>
                <Radio>
                  <input type="radio" value="abroad" {...register('reason')} />
                  Living abroad
                </Radio>
                <Radio>
                  <input type="radio" value="exams" {...register('reason')} />
                  Exams and coursework
                </Radio>
                <Radio>
                  <input type="radio" value="hobby" {...register('reason')} />
                  Culture, travel or hobby
                </Radio>
                {errors.reason && (
                  <ErrorMessage>{errors.reason.message}</ErrorMessage>
                )}
              </div>
              <div className="form-section">
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
                    type="number"
                    {...register('phone')}
                    className={errors.phone ? 'error' : ''}
                    placeholder=" "
                  />
                  <label className={errors.phone ? 'error' : ''}>Phone</label>
                  {errors.phone && (
                    <ErrorMessage>{errors.phone.message}</ErrorMessage>
                  )}
                </Field>
              </div>
              <button type="submit">Book</button>
            </Form>
          </PopupContainer>
        </Modal>
      )}
    </>
  );
};

export default Popup;
