import React from 'react';
import "./PageHeader.scss";

interface IProps {
  header: string
}

const PageHeader: React.FC<IProps> = ({ header }) => {
  return (
    <header className="page-header">
      {header}
    </header>
  );
};

export default PageHeader;