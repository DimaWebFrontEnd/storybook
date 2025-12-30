import { useState } from 'react';
import styles from './Input.module.css';
import eyeIcon from '../../assets/eye.svg';
import eyeSlash from '../../assets/eye-slash.svg';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  clearable?: boolean;
  disabled?: boolean;
}

export const Input = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  clearable = false,
  disabled = false,
}: InputProps) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const actualType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={actualType}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        required
      />

      {type === 'password' && (
        <button
          type="button"
          className={styles.icon}
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          style={{outline: "none", border: "none"}}
        >
          {isPasswordVisible && <img src={eyeIcon} alt="Toggle Password Visibility" />}
          {!isPasswordVisible && <img src={eyeSlash} alt="Toggle Password Visibility" />}
        </button>
      )}

      {clearable && value && (
        <button
          type="button"
          className={styles.icon}
          onClick={() => onChange('')}
        >
          ✕
        </button>
      )}
    </div>
  );
};