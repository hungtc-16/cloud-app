import { createBrowserRouter } from 'react-router-dom';
import privateRouter from './privateRouter';
import publicRouter from './publicRouter';

const element = [
    ...publicRouter,
    ...privateRouter,
]

const appRouter = createBrowserRouter(element, {
    
});

export default appRouter;
