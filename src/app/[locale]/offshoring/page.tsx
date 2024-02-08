import { SmallMain } from "@/components/molecules/Main";
import React from "react";

export default function Offshoring() {
  return (
    <div>
      <SmallMain
        image={{ src: "/images/offshoring/main-image.png" }}
        text={{ red: "Offshoring", white: "Outsourcing" }}
      />
    </div>
  );
}
