import { InputHTMLAttributes } from "react";

interface CardProps {
  name: string;
  age: number; // number
  hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <div>
      <h3>nome: {name}</h3>
      <h3>age: {age}</h3>
      <h3>hobby: {hobby}</h3>
    </div>
  );
};
