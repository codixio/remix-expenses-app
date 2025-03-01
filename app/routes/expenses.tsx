import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Expenses List" },
    { name: "description", content: "-To Do-" },
  ];
};

export default function ExpensesListPage() {
  return (
    <main className="info">
      <h1>Expenses List</h1>
      <p>-To Do-</p>
    </main>
  );
}