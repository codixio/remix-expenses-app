import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "User Authentification" },
    { name: "description", content: "-To Do-" },
  ];
};

export default function UserAuthentificationPage() {
  return (
    <main className="info">
      <h1>User Authentification</h1>
      <p>-To Do-</p>
    </main>
  );
}