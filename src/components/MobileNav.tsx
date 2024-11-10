"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import BurgerMenu from "@/public/icons/hamburger.svg";
import logo from "@/public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constance";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={BurgerMenu}
            width={36}
            height={36}
            alt="hamburger menu"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={logo}
              width={32}
              height={32}
              alt="MeetOne Logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">MeetOne</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto ">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <Link
                      href={link.route}
                      key={link.label}
                      className={cn(
                        "flex gap-4 items-center p-4 rounded-lg justify-start",
                        {
                          "bg-blue-1": isActive,
                        }
                      )}
                    >
                      <Image
                        src={link.imgUrl}
                        alt={link.label}
                        width={24}
                        height={24}
                      />
                      <p className="text-lg font-semibold max-lg:hidden">
                        {link.label}
                      </p>
                    </Link>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
