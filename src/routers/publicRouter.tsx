import { RouteObject } from 'react-router-dom';
import { LayoutMain } from '~/layouts';

const publicRouter: RouteObject[] | any = [
    {
        element: <LayoutMain />,
        children: [
            // {
            //     element: <Login />,
            //     path: configs.routes.login,
            // },
            // {
            //     element: <TwoFactor />,
            //     path: configs.routes.twoFactor,
            // },
            // {
            //     element: <ForgotPassword />,
            //     path: configs.routes.forgotPassword,
            // },
            // {
            //     element: <NewPassword />,
            //     path: configs.routes.newPassword,
            // },
        ],
    },
];

export default publicRouter;