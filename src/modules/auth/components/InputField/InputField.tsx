import { FieldError, UseFormRegister } from "react-hook-form";
import './InputField.scss'

interface InputFieldProps {
    label: string;
    name: string;
    register: UseFormRegister<TFieldValues>;
    error?: FieldError | undefined;
    pattern?: { value: RegExp; message: string };
    type?: string;
    validate?: Record<string, (value: string) => boolean | string>;
    minLength?: number;
    minLengthMessage?:string;
    value?: string;
  }

export const InputField = ({
    label,
    name,
    register,
    error,
    pattern,
    type,
    validate,
    minLength=0,
    minLengthMessage="",
    value,
}:InputFieldProps) => {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        className={`input-field__input ${
          error?.message ? "input-field__input--error" : ""
        }`}
        type={type}
        placeholder={`Ingrese ${label}`}
        {...register(name, {
          required: `${label} requerido`,
          pattern: pattern ? pattern : undefined,
          validate: validate,
          minLength: {
            value: minLength,
            message: minLengthMessage,
          },
        })}
        value={value}
      />
      {error && <span className="input-field__alert">{error.message}</span>}
    </div>
  );
};
