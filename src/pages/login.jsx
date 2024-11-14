import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const LoginPage = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  if (!isLoaded) {
    return (
      <div className="h-96 flex items-end">
        <BarLoader width={"100%"} color="#080808" />
      </div>
    );
  }

  return (
    <>
      <main className="flex">
        <section className="w-1/2 gap-10 sm:gap-20 py-10 sm:py-20 justify-center items-center">
          <div className="flex items-center justify-center h-full">
            <Card className="py-14 px-16 border-2">
              <CardHeader>
                <CardTitle> Sign In: </CardTitle>
              </CardHeader>
              <CardContent>Sign in as a student or teacher.</CardContent>
              <div className="flex justify-center pt-5">
                <div>
                  <SignedOut>
                    <Button
                      variant="outline"
                      onClick={() => setShowSignIn(true)}
                    >
                      Login
                    </Button>
                  </SignedOut>
                  <SignedIn>
                    <Navigate to="/courses" />
                  </SignedIn>
                </div>
              </div>
            </Card>
          </div>

          {showSignIn && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={handleOverlayClick}
            >
              <SignIn
                signUpForceRedirectUrl="/courses"
                fallbackRedirectUrl="/courses"
              />
            </div>
          )}
        </section>
        <div className="w-1/2  bg-[rgb(33,97,172)] flex items-center justify-center min-h-screen">
          <section className="text-center flex">
            <img src="/logo.png" className="h-40" />
            <div className="flex justify-center items-center flex-col">
              <h1
                className="flex flex-col items-center justify-center text-4xl sm:text-4xl lg:text-6xl 
          tracking-tighter py-4 text-white pl-6"
              >
                Blackboard+
              </h1>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
