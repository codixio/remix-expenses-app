import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Expenses Raw Data" },
    { name: "description", content: "-To Do-" },
  ];
};

export default function ExpensesRawDataPage() {
  return (
    <main className="info">
      <h1>Expenses Raw Data</h1>
      <p>-To Do-</p>
    </main>
  );
}