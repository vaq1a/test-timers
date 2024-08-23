import { FC, PropsWithChildren } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = (
  {
    onClick,
    children
  }
) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
