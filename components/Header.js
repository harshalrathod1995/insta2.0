import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../Atom/modalAtom";

function Header() {
  const { data: session } = useSession();
  // console.table(session);
  const router = useRouter();

  ///Recoil part //Global staTE MANAGEMENT SYSTEM
  const [open, setOpen] = useRecoilState(modalState);
  // console.log(open);

  return (
    <div
      className="shadow-sm sticky border-b bg-white
    top-0 z-50"
    >
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid  w-24 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div className="max-w-xs">
          <div className="relative p-3 mt-1 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black 
              focus:border-black rounded-md"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6  md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45 " />
                <div className="absolute rounded-full -top-1 -right-2 text-xs w-5 h-5 bg-red-500 flex items-center justify-center animate-pulse">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="avatar"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
