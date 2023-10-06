import React, { useState } from 'react';
import { Model,  } from '../../shared/types/typesChange';
import ChangeParam from '../changeParams/ChangeParams';

interface EditModelProps {
  model: Model;
}

const ChangeModel: React.FC<EditModelProps> = ({ model }) => {
  const [paramValues, setParamValues] = useState<{ [paramName: string]: string }>({});

  const handleParamChange = (paramName: string, value: string) => {
    setParamValues((prevValues) => ({ ...prevValues, [paramName]: value }));
  };

  const getModel = (): Model => {
    return {
      params: model.params.map((param) => ({
        ...param,
        value: paramValues[param.name] || '',
      })),
    };
  };

  return (
    <div>
      <h2>Edit Model</h2>
      {model.params.map((param) => (
        <ChangeParam
          key={param.name}
          param={param}
          value={paramValues[param.name] || ''}
          onChange={(value) => handleParamChange(param.name, value)}
        />
      ))}
      <button onClick={() => console.log(getModel())}>Get Model</button>
    </div>
  );
};

export default ChangeModel;