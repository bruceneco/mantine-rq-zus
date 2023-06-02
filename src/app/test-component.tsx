"use client";

import { usePersistStore } from "@/stores/persist";
import { Button, Flex, TextInput, useMantineTheme } from "@mantine/core";
import { useState } from "react";

export function Test() {
  const theme = useMantineTheme();

  const { example, saveExample } = usePersistStore();
  const [text, setText] = useState<string>(example);
  return (
    <Flex gap={theme.spacing.md} p={theme.spacing.md}>
      <TextInput
        value={text}
        onChange={(v) => setText(v.target.value)}
      ></TextInput>
      <Button onClick={() => saveExample(text)}>Salvar</Button>
    </Flex>
  );
}
