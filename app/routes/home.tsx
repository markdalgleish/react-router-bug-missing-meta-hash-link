import { Link } from "react-router";
import type { Route } from "./+types/home";

import "./styles.css";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home route" }];
}

export default function HomeRoute() {
  return (
    <div className="root">
      <h1>Home route</h1>
      <h2>Issue:</h2>

      <li>
        <Link to="/catchall">Go to /catchall</Link>
      </li>

      <h2>No issue:</h2>
      <ul>
        <li>
          <Link to="#hash">Hash link</Link>
        </li>
        <li>
          <Link to="/non-catchall">Go to /non-catchall</Link>
        </li>
      </ul>
    </div>
  );
}
