import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import { H4, LiAdditional, NavLinkAdditional, Section } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <Section>
      <H4>Additional information</H4>
      <ul>
        <LiAdditional>
          <NavLinkAdditional to="cast">Cast</NavLinkAdditional>
        </LiAdditional>
        <LiAdditional>
          <NavLinkAdditional to="reviews">Reviews</NavLinkAdditional>
        </LiAdditional>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default AdditionalInfo;
