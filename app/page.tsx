"use client";

import { unstable_rethrow } from "next/navigation";
import { action } from "./actions";

export default function Home() {
  return (
    <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            await action();
          } catch (error) {
            unstable_rethrow(error);
          }
        }}
      >
        <button>Click me</button>
      </form>
    </div>
  );
}
