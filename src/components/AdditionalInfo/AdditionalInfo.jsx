import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import { H4, LiAdditional, NavLinkAdditional, Section, UlAdditional } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <Section>
      <H4>Additional information</H4>
      <UlAdditional>
        <LiAdditional>
          <NavLinkAdditional to="cast">Cast</NavLinkAdditional>
        </LiAdditional>
        <LiAdditional>
          <NavLinkAdditional to="reviews">Reviews</NavLinkAdditional>
        </LiAdditional>
      </UlAdditional>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default AdditionalInfo;
