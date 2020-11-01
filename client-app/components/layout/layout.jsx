import "./layout.scss";
const Layout = (props) => (
  <div className="page-layout row" style={{ backgroundColor: props.bgColor }}>
    <div className="my-auto w-100">
      <div className="w-100">{props.children}</div>
    </div>
  </div>
);
export default Layout;
