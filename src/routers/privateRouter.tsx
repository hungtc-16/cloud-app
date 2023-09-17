import { RouteObject } from 'react-router-dom';
import ErrorElement from '~/components/ErrorElement';
import { NotFound } from '~/components/Exception';
import Dashboard from '~/features/Home/page/Dashboard';
import Images from "~/features/app/images/page/Images";
import UsersMana from '~/features/management/page/UsersManagement';
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
            {
                path: "/mana/users",
                element: <UsersMana />,
                errorElement: <ErrorElement />
            },
            {
                path: "/app/images",
                element: <Images />,
                errorElement: <ErrorElement />
            },
            {
                element: <NotFound />,
                path: '*',
                errorElement: <ErrorElement />
            },
        ],
    },
];

export default privateRouter;
