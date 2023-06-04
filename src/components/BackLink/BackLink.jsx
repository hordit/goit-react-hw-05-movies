import PropTypes from 'prop-types';
import { ButtonBack } from './BackLink.styled';

const BackLink = ({ to, children }) => {
    return (
      <ButtonBack to={to}>
        {children}
      </ButtonBack>
    );
  };

  BackLink.propTypes = {
    to: PropTypes.object,
    children: PropTypes.node.isRequired,
  };
  
  export default BackLink;