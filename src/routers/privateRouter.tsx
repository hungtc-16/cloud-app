import { RouteObject } from 'react-router-dom';
import Dashboard from '~/features/Home/page/Dashboard';
import { LayoutMain } from '~/layouts';

const privateRouter: RouteObject[] | any = [
    {
        element: <LayoutMain />,
        path: "/",
        children: [
            {
                index: true,
                element: <Dashboard />
            },

        ],
    },
];

export default privateRouter;
