"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/floating-navbar.tsx";
import { cn } from "../../utils/cn.ts";
import Link from "next/link";


export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-white ", className)}
      >
        <Menu setActive={setActive}>
          <HoveredLink href={'/'}>
            Home
          </HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="  text-sm flex flex-col space-y-4">
              <HoveredLink href="/course">All Course</HoveredLink>
              <HoveredLink href="/course">Basic Music Theory</HoveredLink>
              <HoveredLink href="/course">Advanced Composition</HoveredLink>
              <HoveredLink href="/course">Song Writting</HoveredLink>
              <HoveredLink href="/course">Music Production</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href={'/contact'}>Contact Us</HoveredLink>
        </Menu>
      </div>
    );
  }
  