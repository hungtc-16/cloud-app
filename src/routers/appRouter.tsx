import { createBrowserRouter } from 'react-router-dom';
import appSettingRouter from './appSettingRouter';
import privateRouter from './privateRouter';
import publicRouter from './publicRouter';

const element = [
    ...publicRouter,
    ...appSettingRouter,
    ...privateRouter,
]

const appRouter = createBrowserRouter(element);

export default appRouter;
