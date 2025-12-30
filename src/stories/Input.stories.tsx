import { useState } from 'react';
import { Input } from '../components/Input/Input';

export default {
  title: 'Input/Input',
  component: Input,
};

export const Text = () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={setValue} placeholder="Text input" />;
};

export const Password = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      type="password"
      value={value}
      onChange={setValue}
      placeholder="Password"
    />
  );
};

export const Number = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      type="number"
      value={value}
      onChange={setValue}
      placeholder="Number"
    />
  );
};

export const Clearable = () => {
  const [value, setValue] = useState('Hello');
  return (
    <Input
      value={value}
      onChange={setValue}
      clearable
      placeholder="Clearable input"
    />
  );
};