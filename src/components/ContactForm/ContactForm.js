import React, { useState } from 'react';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.nameLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label className={s.nameLabel}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        ></input>
      </label>
      <button className={s.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
