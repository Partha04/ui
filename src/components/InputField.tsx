import React from "react";

type Props = {
  label?: string;
  name: string;
  type?:string;
  placeholder?:string
};

export default function InputField({ label, name ,type, placeholder}: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type={type}  placeholder={placeholder}/>
    </>
  );
}
