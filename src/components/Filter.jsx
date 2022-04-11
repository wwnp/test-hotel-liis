import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorHelper } from './ErrorHelper';

export const Filter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <form className=' HomePage__filter Hotel__form text-center' onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label className='form-label' htmlFor="username">Логин</label>
        <input
          {...register(
            'location', {
            required: 'Локация обязательна',
            minLength: 'Длина локации больше трех символов'
          })}
          className='form-control'
          type="email"
        />
        <ErrorHelper type={errors?.location}></ErrorHelper>
      </div>

      <div className="input-group">
        <label className='form-label' htmlFor="password">Дата заселения</label>
        <input
          {...register('date', {
            required: 'Дата обязательна',
          })}
          className='form-control'
          type="date"
          id="date"
        />
        <ErrorHelper type={errors?.date}></ErrorHelper>
      </div>

      <div className="input-group">
        <label className='form-label' htmlFor="username">Количество дней</label>
        <input
          {...register(
            'days', {
            required: 'Дни заселения обязательны',
          })}
          className='form-control'
          type="number"
        />
        <ErrorHelper type={errors?.days}></ErrorHelper>
      </div>

      <button
        className='btn btn-hotel btn-w100'
        type='submit'
      >
        Найти
      </button>
    </form>
  )
}
