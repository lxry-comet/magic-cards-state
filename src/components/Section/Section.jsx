import PropTypes from 'prop-types';
import {Global, Title} from './Section.styled.jsx';

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