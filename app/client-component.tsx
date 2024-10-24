"use client";

import { unstable_rethrow } from "next/navigation";
import { action } from "./actions";

export function ClientComponent() {
  return (
    <div className="space-y-6">
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            await action();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <button className="bg-blue-200">
          Click me to try swallowed redirect error 1 request
        </button>
      </form>
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
        <button className="bg-red-200">
          Click me to try with unstable_rethrow 2 requests
        </button>
      </form>
    </div>
  );
}
