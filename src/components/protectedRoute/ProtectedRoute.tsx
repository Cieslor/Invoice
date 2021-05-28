import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentUser } from 'state';

interface IProtectedRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ComponentType<RouteComponentProps>;
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ component: Component, ...routeProps }) => {
  const user = useRecoilValue(currentUser);
  return (
    <Route {...routeProps} render={(props) => (user ? <Component {...props} /> : <Redirect to="/signin" />)}></Route>
  );
};
