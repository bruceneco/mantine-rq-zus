"use client";
import { Text } from "@mantine/core";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};
export default function ({ error, reset }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
