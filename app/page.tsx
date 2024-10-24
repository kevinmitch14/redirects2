import { headers } from "next/headers";
import { ClientComponent } from "./client-component";

export default async function Home() {
  await headers();
  return (
    <div>
      <ClientComponent />
    </div>
  );
}
