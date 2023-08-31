import { RouteObject } from 'react-router-dom';
import { LayoutMain } from '~/layouts';

const appSettingRouter: RouteObject[] | any = [
    {
        element: <LayoutMain />,
        path: "admeon",
        children: [
            // {
            //     index: true,
            //     loader: () => redirect(configs.routes.accountSetting),
            // },
        ],
    },
];

export default appSettingRouter;
