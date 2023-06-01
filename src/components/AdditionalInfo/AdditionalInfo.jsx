import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet} from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <section>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default AdditionalInfo;
