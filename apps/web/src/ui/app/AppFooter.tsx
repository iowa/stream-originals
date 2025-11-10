import {AppCons} from '@/ui/app/AppCons';

export default function AppFooter() {
  return (
    <footer className="border-t border-base-300 bg-base-100 mt-4">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Netflix
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Apple TV+
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Prime Video
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Browse Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trending
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-base-content/60">
            Copyright © {new Date().getFullYear()} {AppCons.APP_NAME}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
