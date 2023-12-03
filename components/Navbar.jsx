"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Logo from "@/public/Logo.png";

import Button from "./Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 shadow-sm">
      <div className="flex items-center space-x-9">
        <Link href="/">
          <Image src={Logo} alt="logo" height={42} width={100} />
        </Link>

        <div className="hidden sm:flex ">
          <Searchbar />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex ">
        {session?.user ? (
          <div className="flex items-center gap-3 md:gap-5">
            <div className="flex items-center space-x-6">
              <Link href="/" className=" transition-all hover:text-orange-50 ">
                Explore
              </Link>
              <Link href="/" className=" transition-all hover:text-orange-50 ">
                Events
              </Link>
              <Link href="/" className=" transition-all hover:text-orange-50 ">
                Category
              </Link>
            </div>
            <div
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
              className="transition-all hover:text-orange-50 cursor-pointer"
            >
              sign Out
            </div>
            <Link href="/upload">
              <Button
                type="button"
                title="Upload"
                variant="btn_orange"
                icon={<FileUploadIcon />}
              />
            </Link>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full "
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-6">
                    <Link href="/">Explore</Link>
                    <Link href="/">Events</Link>
                    <Link href="/">Category</Link>
                  </div>
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="btn_orange"
                  >
                    Join
                  </button>
                </div>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation  */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full "
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-orange-300 min-w-[210px] flex flex-col gap-2 justify-end items-end">
                <Link
                  href="/profile"
                  onClick={() => setToggleDropdown(false)}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold hover:text-orange-50"
                >
                  My Profile
                </Link>
                <Link
                  href="/"
                  onClick={() => setToggleDropdown(false)}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold hover:text-orange-50"
                >
                  Explore
                </Link>
                <Link
                  href="/"
                  onClick={() => setToggleDropdown(false)}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold hover:text-orange-50"
                >
                  Events
                </Link>
                <Link
                  href="/"
                  onClick={() => setToggleDropdown(false)}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold hover:text-orange-50"
                >
                  Category
                </Link>
                <Link
                  href="/upload"
                  onClick={() => setToggleDropdown(false)}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold hover:text-orange-50"
                >
                  Upload
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="bg-green-90 px-6 py-1 text-white transition-all hover:bg-orange-50 rounded-full"
                >
                  sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="btn_orange"
                >
                  Join
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
