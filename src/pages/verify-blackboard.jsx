import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { BarLoader } from "react-spinners";

const VerifyBlackboard = () => {
  const { user, isLoaded } = useUser();
  console.log(user);

  if (!isLoaded) {
    return (
      <div className="h-96 flex items-end">
        <BarLoader width={"100%"} color="#080808" />
      </div>
    );
  }

  return (
    <>
      <main className="flex min-h-screen justify-start items-center flex-col">
        <Card className="py-24 px-20 border-2 mt-[25vh] flex flex-col gap-4">
          <div>
            <CardHeader>
              <CardTitle> Sign In to Cunyfirst </CardTitle>
            </CardHeader>
          </div>
          <div>
            <CardContent className="flex flex-col gap-4 pb-4">
              <Input type="text" placeholder="Email" className="flex-1" />
              <Input type="text" placeholder="Password" className="flex-1" />
            </CardContent>
            <div className="flex justify-start pl-6">
              <Button variant="outline">Sign in </Button>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default VerifyBlackboard;
