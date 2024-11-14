import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const LoginPage = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();

  const { user } = useUser();

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

  return (
    <>
      <div className="flex">
        <main className="w-1/2 gap-10 sm:gap-20 py-10 sm:py-20 justify-center items-center">
          <section className="flex items-center justify-center h-full">
            <Card className="py-14 px-16">
              <CardHeader>
                <CardTitle> Sign In: </CardTitle>
              </CardHeader>
              <CardContent>Sign in as a student or teacher.</CardContent>
              <div className="flex gap-10 justify-center pt-5">
                <Link to="/courses">
                  <Button variant="black" size="lg">
                    Student
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="blue" size="lg">
                    Teacher
                  </Button>
                </Link>
              </div>
            </Card>
          </section>
        </main>
        <div className="w-1/2  bg-[rgb(33,97,172)] flex items-center justify-center min-h-screen">
          <section className="text-center flex">
            <img src="/logo.png" className="h-40" />
            <div className="flex justify-center items-center flex-col">
              <h1
                className="flex flex-col items-center justify-center text-4xl sm:text-4xl lg:text-6xl 
          tracking-tighter py-4 text-white pl-4"
              >
                Blackboard+
              </h1>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
