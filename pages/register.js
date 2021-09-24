import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { registerUser, clearError } from "../redux/actions/userActions";
import { FormBox, FormContainer } from "../components/StyleComponents";
import LogoHeader from "../components/auth/LogoHeader";
import InputField from "../components/auth/Input";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      router.push("/login");
    }
    if (error) {
      console.log(error)
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch, success]);

  // const handleFile = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatar(reader.result);
  //       setAvatarPreview(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  const disableBtn = () => ((email.length === 0 && password.length === 0 )|| loading);

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    dispatch(registerUser(userData));
  };

  return (
    <>
      <Head>
        <title>Hotel Las Palm | Register</title>
      </Head>
      <ToastContainer/>
      <>
        <FormContainer>
          <span>
            <div></div>
          </span>
          <FormBox>
            <LogoHeader />
            <form autoComplete={"off"} onSubmit={submitHandler}>
              <InputField
                type={"text"}
                value={name}
                label={"Name"}
                onChange={(e) => setName(e.target.value)}
              />
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
              <input type="submit" value={loading? "Wait..":"REGISTER"} disabled={disableBtn()} />
            </form>
            <p>
              Already a user? &nbsp;
              <Link href={"/login"} passHref>
                <a>Login here</a>
              </Link>
            </p>
          </FormBox>
          <small>2021 &copy; &nbsp;By Rajan Verma</small>
        </FormContainer>
      </>
    </>
  );
};

export default LoginPage;

//  File Uploader
//  Login register Form Duplicay in Fields
//  Register form Working ?
// {avatar.length >= 0 && (
//               <AvatarView>
//                 <Image
//                   layout="fill"
//                   objectFit="contain"
//                   src={
//                     avatar ||
//                     "https://res.cloudinary.com/dev-rajan/image/upload/v1630951813/Hotel-Management-App/avatars/illustration-user-avatar-icon_53876-5907_lvfwyd.jpg"
//                   }
//                   alt="avatar"
//                 />
//               </AvatarView>
//             )}
