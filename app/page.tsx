"use client";

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
            console.log(error);
            alert("Error");
          }
        }}
      >
        <button>Click me</button>
      </form>
    </div>
  );
}
