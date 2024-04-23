import {UseFormRegister, UseFormRegisterReturn} from 'react-hook-form'

interface CheckboxFieldProps{
    label:string;
    name: string;
    register: UseFormRegister;
    disabled?:boolean;
}

export const CheckboxField = ({label,register,name,disabled=false}:CheckboxFieldProps) => {
  return (
    <div>
        <input
        type='checkbox'
        {
            ...register(name)
        }
        disabled={disabled}
        />
        <label>{label}</label>
    </div>
  )
}
