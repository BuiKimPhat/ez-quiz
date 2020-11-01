import { Form, Button } from "react-bootstrap";
import "./login.scss";
import Router from 'next/router'
const Login = (props) => {
  const handleSubmit = e => {
    e.preventDefault();
    Router.replace('/game');
  };
  return (
    <div className="login container p-5">
      <h3 className="text-center p-2">Đăng nhập</h3>
      <Form className="login-form" onSubmit={e => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Tên đăng nhập"
          />
          <Form.Text className="text-muted">
            Tên đăng nhập do ban tổ chức cấp
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form-input"
            type="password"
            placeholder="Mật khẩu"
            minLength="8"
          />
          <Form.Text className="text-muted">
            Mật khẩu phải có ít nhất 8 kí tự
          </Form.Text>
        </Form.Group>
        <Button className="login-submit" variant="success" type="submit">
          Đăng nhập
        </Button>
      </Form>{" "}
    </div>
  );
};
export default Login;
