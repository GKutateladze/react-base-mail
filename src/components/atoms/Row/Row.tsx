import React from 'react';
import "./Row.scss";

interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

const Row:React.FC<IProps> = ({children}) => {
    return (
        <div className="row">
            { children }
        </div>
    );
};

export default Row;