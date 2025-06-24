import type { LangProps } from "@/interfaces/component";
import { Gift, Star } from "lucide-react";
import { getWaitlistDictionary } from "../../i18n";
import { LANG } from "@/enums/global";
import { PERKS_EN, PERKS_ID } from "../../constant";
import WaitlistForm from "../common/waitlist-form";

export default function Waitlist({ lang }: LangProps) {
  const t = getWaitlistDictionary(lang);
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Gift className="w-4 h-4 mr-2" />
            {t.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>

          <p className="text-xl text-muted-foreground mb-8">{t.subtitle}</p>

          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground mb-12">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              <span>{t.earlyBirdBadge}</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <aside id="early-bird-form">
              <h3 className="text-2xl font-bold mb-6">{t.secureSpot}</h3>

              <WaitlistForm lang={lang} />
            </aside>

            {/* Benefits */}
            <aside id="early-bird-benefits">
              <h3 className="text-2xl font-bold mb-6">{t.benefitTitle}</h3>

              <ul className="space-y-4">
                {(lang === LANG.ID ? PERKS_ID : PERKS_EN).map((perk, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-foreground">{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <h4 className="font-semibold mb-2">{t.limitedOffer}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.limitedOfferDesc}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
