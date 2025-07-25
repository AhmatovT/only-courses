"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ModeToggle = () => {
  const [mount, setMount] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMount(true), []);

  return mount && resolvedTheme === "dark" ? (
    <Button variant={"ghost"} size={"icon"} onClick={() => setTheme("light")}>
      <Sun />
    </Button>
  ) : (
    <Button variant={"ghost"} size={"icon"} onClick={() => setTheme("dark")}>
      <Moon />
    </Button>
  );
};

export default ModeToggle;
