import { App as AppAntd, ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import appRouter from '~/routers';
import '~/styles/globalStyles.scss';

const App = () => {
  return (
    <AppAntd>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 1,
            colorPrimary: "#005ee1",
            colorInfo: "#005ee1",
            fontFamily: 'Roboto',
          },
          components: {
            Menu: {
              colorPrimary: "rgb(0, 78, 188)"
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
  );
}

export default App;
