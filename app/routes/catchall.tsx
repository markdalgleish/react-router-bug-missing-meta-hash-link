import { Link } from "react-router";
import type { Route } from "./+types/home";

import "./styles.css";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Catchall route" }];
}

export default function CatchallRoute() {
  return (
    <div className="root">
      <h1>Catchall route</h1>
      <p>
        <Link to="#hash">Hash link</Link>
      </p>
    </div>
  );
}
