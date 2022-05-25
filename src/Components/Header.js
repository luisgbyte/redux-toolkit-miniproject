import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Head, Title, Button } from "./Header.styled";
import { userLogout } from "../store/login";

const Header = () => {
  const { user, token } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;

  const dispatch = useDispatch();

  return (
    <Head>
      <Title>Mini dogs</Title>
      <Button
        onClick={() => dispatch(userLogout())}
        cor={`
        ${loading ? "red" : ""}
        ${user.data ? "green" : ""}
      `}
      />
    </Head>
  );
};

export default Header;
