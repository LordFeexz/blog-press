import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import NotFound from "@/components/layouts/not-found";
import Root from "@/components/layouts/root";
import { LANG } from "@/enums/global";

export default function NotFoundPage() {
  return (
    <Root lang={LANG.EN}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main
          id="main-content"
          className="flex-1 py-4 px-4 relative overflow-hidden"
        >
          <NotFound />
        </main>
        <Footer lang={LANG.EN} />
      </div>
    </Root>
  );
}
