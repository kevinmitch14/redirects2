import { headers } from "next/headers";

export default async function Home() {
  await headers();
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
