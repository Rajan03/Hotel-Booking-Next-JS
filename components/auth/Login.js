import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/client";
import { toast } from "react-toastify";
import { LoginBox, LoginContainer, Logo } from "../StyleComponents";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <LoginContainer>
          <LoginBox>
            <div>
              <div></div>
            </div>
            <div>
              <Logo>
                <Image
                  src="https://res.cloudinary.com/dev-rajan/image/upload/v1626012495/Hotel-Management-App/logo_c47gq3.png"
                  alt="logo"
                  height="30px"
                  width="30px"
                  className="logo"
                />
                <span> Hotel Las Palm</span>
              </Logo>
              <form autoComplete={"off"}>
                <span>
                  <label htmlFor={"email"}>Email</label>
                  <input
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
                <span>
                  <label htmlFor={"password"}>Password</label>
                  <input
                    id={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </span>
                <button>LOGIN</button>
                <Link href={"/forgot"}>
                  <a>Forgot password?</a>
                </Link>
              </form>
              <p>
                New User? &nbsp;
                <Link href={"/register"} passHref>
                  <a>Register here</a>
                </Link>
              </p>
            </div>
          </LoginBox>
          <small>2021 &copy; &nbsp;By Rajan Verma</small>
      </LoginContainer>
    </>
  );
};

export default Login;
