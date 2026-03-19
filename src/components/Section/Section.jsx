import React from 'react';
import PropTypes from 'prop-types';
import {Global, Title} from './Section.styled.jsx';


import css from "./Section.module.css"; 

function Section({ title, children }) {
  return (
    <Global>
      {title && <Title>{title}</Title>}
      {children}
    </Global>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;