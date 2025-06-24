import { FileText } from "lucide-react";
import Link from "next/link";
import {
  FOOTER_COMPANY_NAVIGATION_EN,
  FOOTER_COMPANY_NAVIGATION_ID,
  FOOTER_PRODUCT_NAVIGATION_EN,
  FOOTER_PRODUCT_NAVIGATION_ID,
  SOCIAL_MEDIA,
} from "./constant";
import type { LangProps } from "@/interfaces/component";
import { LANG } from "@/enums/global";
import { getFooterDictionary } from "./i18n";

export default function Footer({ lang }: LangProps) {
  const t = getFooterDictionary(lang);
  return (
    <footer
      className="bg-primary text-primary-foreground py-16"
      id="app-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Blog Press</h3>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">{t.desc}</p>
            <div className="flex space-x-4">
              {SOCIAL_MEDIA.map(({ icon, href }, idx) => (
                <Link
                  href={href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  key={idx}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <div id="product">
            <h4 className="text-lg font-semibold mb-4">{t.product}</h4>
            <ul className="space-y-2">
              {(lang === LANG.ID
                ? FOOTER_PRODUCT_NAVIGATION_ID
                : FOOTER_PRODUCT_NAVIGATION_EN
              ).map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="company">
            <h4 className="text-lg font-semibold mb-4">{t.company}</h4>
            <ul className="space-y-2">
              {(lang === LANG.ID
                ? FOOTER_COMPANY_NAVIGATION_ID
                : FOOTER_COMPANY_NAVIGATION_EN
              ).map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Blog Press. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                {t.privacy}
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
