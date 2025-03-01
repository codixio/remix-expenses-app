import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Add an Expense" },
    { name: "description", content: "-To Do-" },
  ];
};

export default function AddAnExpensePage() {
  return (
    <main className="info">
      <h1>Add an Expense</h1>
      <p>-To Do-</p>
    </main>
  );
}