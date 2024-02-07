// import clsx from 'clsx';
import { useState } from 'react';
import css from './Profile.module.css';

export const Profile = () => {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};
