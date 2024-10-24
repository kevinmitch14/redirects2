"use server";

import { redirect } from "next/navigation";

export async function action() {
  await new Promise((resolve) => setTimeout(resolve, 2_000));
  redirect("/new");
}
