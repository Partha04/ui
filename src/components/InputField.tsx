import React from "react";

type Props = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange: Function;
  value: string;
  errorMessage?: string;
};

export default function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {errorMessage && errorMessage !== "" && <p>{errorMessage}</p>}
    </>
  );
}
