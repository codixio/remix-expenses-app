import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Expense" },
    { name: "description", content: "-To Do-" },
  ];
};

export default function EditExpensePage() {
  return (
    <main className="info">
      <h1>Edit Expense</h1>
      <p>-To Do-</p>
    </main>
  );
}