import { FC, ReactNode } from 'react';

interface CardProps {
  title?: string;
  value?: number | string;
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ title, value, children }) => {
  return (
    <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
      {title && (
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      )}
      {value && (
        <p
          className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl font-bold"
        >
          {value}
        </p>
      )}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
