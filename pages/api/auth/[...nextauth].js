import NextAuth from "next-auth";
import Providers from "next-auth/providers";

//  Database Config and model
import User from "../../../models/User";
import connectDb from "../../../config/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        connectDb();
        const { email, password } = credentials;
        // Check email password
        if (!email || !password) {
          throw new Error("Please Enter valid email and password :(");
        }
        // Find User
        const user = await User.findone({ email }).select("+password");
        if (!user) {
          throw new Error("Ivalid email or password :(");
        }
        //  validate user
        const isValidPassword = await user.checkPassword();
        if (!isValidPassword) {
          throw new Error("Ivalid email or password :(");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      //  Callback is called when JWT is created  (i.e, when user is logged in)
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      // token is what is passed from JWT callback, it has access to user object as well
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
