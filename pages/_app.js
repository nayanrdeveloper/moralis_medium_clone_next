import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_APP_URL}
      >
        <NotificationProvider>
          {" "}
          <Component {...pageProps} />
        </NotificationProvider>
      </MoralisProvider>{" "}
    </div>
  );
}

export default MyApp;
