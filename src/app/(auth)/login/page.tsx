import LoginForm from "@components/organisms/LoginForm/page";
import LoginTemplate from "@components/templates/LoginTemplate/layout";
import React from "react";

const Login = () => {
  return (
    <div>
      <LoginTemplate form={<LoginForm />} />;
    </div>
  );
};

export default Login;
