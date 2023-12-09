/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./createModal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </>
  );
};

export function CreateModal() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form action="" className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="price" value={price} updateValue={setPrice} />
          <Input label="image" value={image} updateValue={setImage} />
        </form>
      </div>
    </div>
  );
}
