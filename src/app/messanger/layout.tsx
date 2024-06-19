"use client";
//Redux
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  changeCurrentUser,
  addUser,
  UserType,
} from "@/lib/messanger/userSlice";

//Shadcn-ui
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

//React
import { useState } from "react";

//Fancy icons
import { Plus } from "react-feather";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.user.user);
  const currentUser = useAppSelector((state) => state.user.currentUser);

  //const [userColor, setUserColor] = useState<string>();
  const [userName, setUserName] = useState<string>("");

  function userSubmit() {
    const userData: UserType = {
      name: userName,
      color: "#000",
      ID: users.length,
    };
    dispatch(addUser(userData));
  }

  return (
    <div className="flex h-screen">
      <ScrollArea className="w-[30%] fixed left-0 xl:w-[20%] py-6 px-4 border-r shadow-lg hover:shadow-xl">
        <div className="flex flex-col gap-y-2">
          {users.map((user) => (
            <Button
              key={user.ID}
              variant={user.ID === currentUser ? "outline" : "default"}
              onClick={() => dispatch(changeCurrentUser(user.ID))}
            >
              {user.name}
            </Button>
          ))}
          <Dialog>
            <DialogTrigger className="flex justify-center">
              <Plus />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New User</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-y-4">
                <Input
                  type="name"
                  placeholder="user name"
                  value={userName}
                  onChange={(text) => setUserName(text.target.value.toString())}
                  required
                />
                <DialogClose asChild>
                  <Button type="submit" onClick={() => userSubmit()}>
                    Create
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </ScrollArea>

      {children}
    </div>
  );
}
