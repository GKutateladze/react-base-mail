import React from 'react';
import "./Input.scss"

interface IProps {
    name?: string;
    placeholder: string;
    type?: string;
    reference?: any;
    defaultValue?: string;
}

const Input: React.FC<IProps> = ({name, placeholder, type='text', reference, defaultValue}) => {
    return (
        <input className="input" name={name} placeholder={placeholder} type={type} ref={reference} defaultValue={defaultValue}/>
    );
};

export default Input;