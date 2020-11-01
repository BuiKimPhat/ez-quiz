import "./app.scss";
import NProgress from "nprogress";
import Router from "next/router";
Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
