import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Pricing info" },
    { name: "description", content: "-To Do-" },
  ];
};

export default function PricingInfoPage() {
  return (
    <main className="info">
      <h1>Pricing Info</h1>
      <p>-To Do-</p>
    </main>
  );
}