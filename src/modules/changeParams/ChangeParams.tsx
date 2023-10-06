import React, { ChangeEvent } from 'react';
import { Param } from '../../shared/types/typesChange';

interface ParamProps {
  param: Param;
  value: string;
  onChange: (value: string) => void;
}
// Дастою параметры в компонент спомошю дестуризакцый  
const ChangeParam: React.FC<ParamProps> = ({ param, value, onChange }) => {
  // здесь я хотел сначало зделать привязку спомощю стейта но попробывал чтото новое спомошью функцый!
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{param.name}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default ChangeParam;