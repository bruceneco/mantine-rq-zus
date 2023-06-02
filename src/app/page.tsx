"use client";
import { Test } from "@/app/test-component";
import { useGetRepo } from "@/queries/repo";
import { Loader } from "@mantine/core";
import { Prism } from "@mantine/prism";

export default function Home() {
  const { isLoading, data: repo } = useGetRepo();

  if (isLoading) return <Loader />;
  return (
    <main>
      <Test />
      <Prism language={"jsx"}>{JSON.stringify(repo)}</Prism>
    </main>
  );
}
