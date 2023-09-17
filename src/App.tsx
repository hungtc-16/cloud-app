import { App as AppAntd, ConfigProvider } from 'antd';
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import appRouter from '~/routers';
import '~/styles/globalStyles.scss';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AppAntd>
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 1,
              colorPrimary: "#005ee1",
              colorInfo: "#005ee1",
              fontFamily: 'Mona Sans, Helvetica Neue, Helvetica, Arial, sans-serif, Haas Grot Text R Web',
            },
            components: {
              Menu: {
                colorPrimary: "rgb(0, 78, 188)"
              },
              Table: {
                fontWeightStrong: 500
              }
            }
          }}
        >
          <RouterProvider router={appRouter} />
        </ConfigProvider>
        {/* config global notification */}
        <ToastContainer
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          closeButton={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppAntd>
    </ErrorBoundary>

  );
}

export default App;
