import { AppCons } from "@/ui/app/AppCons";

export default function AppFooter() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-100 p-5">
      <aside>
        <p className="font-bold">
          {AppCons.APP_NAME}
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};
