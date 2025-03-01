import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Expense Analytics" },
    { name: "description", content: "-To Do-" },
  ];
};

export default function ExpenseAnalyticsPage() {
  return (
    <main className="info">
      <h1>Expense Analytics</h1>
      <p>-To Do-</p>
    </main>
  );
}