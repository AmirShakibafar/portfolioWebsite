// components/FormButton.tsx
"use client";
import React from "react";
import ShinyButton from "./ShinyButton";

type FormButtonProps = Omit<
  React.ComponentProps<typeof ShinyButton>,
  "variant"
>;

export default function FormButton(props: FormButtonProps) {
  return <ShinyButton variant="primary" {...props} />;
}
