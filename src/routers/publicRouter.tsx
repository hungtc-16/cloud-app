import { RouteObject } from 'react-router-dom';
import { routersConfig } from '~/configs';
import LoginPage from '~/features/auth/page/LoginPage';
import SignInPage from '~/features/auth/page/SignInPage';

const publicRouter: RouteObject[] | any = [
    {
        element: <SignInPage />,
        path: routersConfig.signIn,
    },
    {
        element: <LoginPage />,
        path: routersConfig.login,
    },
];

export default publicRouter;