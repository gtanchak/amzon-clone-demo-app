import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";

import "../styles/globals.css";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <AnyComponent {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
