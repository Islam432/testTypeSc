import React, { ChangeEvent } from 'react';
import { Param } from '../../shared/types/typesChange';

interface ParamProps {
  param: Param;
  value: string;
  onChange: (value: string) => void;
}
// достаю параметры в компонент с помощью дестуризакцый  
const ChangeParam: React.FC<ParamProps> = ({ param, value, onChange }) => {
  // здесь я хотел сначало зделать привязку спомощю стейта но попробывал чтото новое с помощью функций!
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const ElementInput = param.type === 'select' ?(
    <select value={value} onChange={handleChange} ></select>
  ) : (
    <input type={param.type} value={value} onChange={handleChange} />
  )

  return (
    <div>
      <label>{param.name}</label>
   {ElementInput}
    </div>
  );
};

export default ChangeParam;