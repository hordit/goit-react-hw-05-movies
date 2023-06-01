import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
    return (
      <NavLink to={to}>
        {children}
      </NavLink>
    );
  };

  BackLink.propTypes = {
    to: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default BackLink;