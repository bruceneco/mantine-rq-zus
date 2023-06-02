"use client";
import { useMantineTheme } from "@mantine/core";
import { Toaster } from "react-hot-toast";

export default function Toast() {
  const theme = useMantineTheme();
  const isDarkTheme = theme.colorScheme === "dark";
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: isDarkTheme ? theme.colors.dark[5] : theme.colors.gray[3],
          color: isDarkTheme ? theme.colors.gray[0] : theme.colors.dark[9],
        },
      }}
    />
  );
}
