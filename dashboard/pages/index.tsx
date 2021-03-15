import Sidebar from "@components/organisms/sidebar";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { NextPage } from "next";
import { Skeleton } from "@dotkomonline/yacl";

const Home: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Skeleton width="100%" height="100%" />;
  }
  return (
    <div>
      <Sidebar />
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default Home;
