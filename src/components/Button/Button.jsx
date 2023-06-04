import PropTypes from 'prop-types';
import { ButtonLoadMore, DivContainer } from './Button.styled';

const Button = ({ onClick }) => {
  
  return (
    <DivContainer>
      <ButtonLoadMore type="button" onClick={onClick}>
        LOAD MORE
      </ButtonLoadMore>
    </DivContainer>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
