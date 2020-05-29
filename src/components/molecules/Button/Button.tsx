import React from 'react';
import "./Button.scss"

interface IProps {
    label: React.ReactNode;
    handler: () => void;
    type?: "submit" | "reset" | "button";
}

const Button: React.FC<IProps> = ({label, handler, type="button"}) => {
    return (
        <button type={type} onClick={handler} className="button">{ label }</button>
    );
};

export default Button;