import Layout from "../components/layout/layout";
import LoginForm from "../components/login-form/login"
import { useEffect } from 'react'
import io from 'socket.io-client'
const Index = () => {
  useEffect(()=> {
    io('localhost:8080');
  });
  return (
    <Layout bgColor="#9ad3bc">
        <LoginForm />
    </Layout>
  );
};
export default Index;
