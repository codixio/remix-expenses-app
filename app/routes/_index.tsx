import type { MetaFunction, LinksFunction } from "@remix-run/node";
import homeStyles from "../styles/home.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Easily keep track of your expenses!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: homeStyles },
];

export default function Index() {
  return (
    <main id="content">
      <h1>Keeping track of your expenses never was easier</h1>
      <p>Use our quick expenses app to keep track of your spendings, free of charge!</p>
    </main>
  );
}
