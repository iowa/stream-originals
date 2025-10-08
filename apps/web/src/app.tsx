import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import AppHeader from "~/ui/layout/AppHeader";
import AppFooter from "~/ui/layout/AppFooter";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>stream-originals-hub</Title>
          <Suspense>
            <AppHeader/>
            <main class="flex justify-center pt-10 flex-grow">
              <div class="container">
                {props.children}
              </div>
            </main>
            <AppFooter/>
          </Suspense>

        </MetaProvider>
      )}
    >
      <FileRoutes/>
    </Router>
  );
}
