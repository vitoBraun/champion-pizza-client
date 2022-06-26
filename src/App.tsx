import React from "react";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import "./styles/app.css";
import Router from "./Router";

Sentry.init({
  dsn: "https://c49a23217f354a05b1ff8b5628ac1432@o1299096.ingest.sentry.io/6531268",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <div className="wrapper">
      <Router />
    </div>
  );
}

export default App;
