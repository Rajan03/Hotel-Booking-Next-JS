import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Head from "next/head";
import Link from "next/link";
import { signIn } from "next-auth/client";
import { FormBox, FormContainer } from "../components/StyleComponents";
import LogoHeader from "../components/auth/LogoHeader";
import InputField from "../components/auth/Input";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.error) {
      toast.error(res.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <Head>
        <title>Hotel Las Palm | Login</title>
      </Head>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
      />
      <FormContainer>
        <span>
          <div></div>
        </span>
        <FormBox>
          <LogoHeader />
          <form autoComplete={"off"} onSubmit={submitHandler}>
            <InputField
              type={"email"}
              value={email}
              label={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type={"password"}
              value={password}
              label={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value={loading ? "Wait...": "LOGIN"}
              disabled={(email.length === 0 && password.length === 0) || loading}
            />
            <Link href={"/forget"}>
              <a>Forgot Password?</a>
            </Link>
          </form>
          <p>
            New User? &nbsp;
            <Link href={"/register"} passHref>
              <a>Register</a>
            </Link>
          </p>
        </FormBox>
        <small>2021 &copy; &nbsp;By Rajan Verma</small>
      </FormContainer>
    </>
  );
};

export default LoginPage;
