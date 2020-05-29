import React from 'react';
import "./FormGroup.scss"

interface IProps {
    children: React.ReactNode | React.ReactNode[];
    label?: React.ReactNode;
}

const FormGroup: React.FC<IProps> = ({children, label}) => {
    return (
        <div>
            { label && <h4 className="group-label">{ label }</h4>}
            { children }
        </div>
    );
};

export default FormGroup;