import { Link } from "react-router";
import type { Route } from "./+types/home";

import "./styles.css";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Non-catchall route" }];
}

export default function NonCatchallRoute() {
  return (
    <div className="root">
      <h1>Non-catchall route</h1>
      <ul>
        <li>
          <Link to="#hash">Hash link</Link>
        </li>
      </ul>
    </div>
  );
}
