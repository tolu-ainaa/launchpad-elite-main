const cols = [
  { h: "Shop", l: ["Phone", "Accessories", "Trade In", "Financing"] },
  { h: "Account", l: ["Manage", "Order Status", "Wishlist"] },
  { h: "Omen Store", l: ["Find a Store", "Today at Omen", "Group Orders"] },
  { h: "About Omen", l: ["Newsroom", "Leadership", "Careers", "Contact"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60 text-xs text-muted-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="mb-8 leading-relaxed">
          Pricing shown is a demo. Omen is a fictional product built to demonstrate a clean storefront design.
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="mb-3 font-semibold text-foreground">{c.h}</h4>
              <ul className="space-y-2">
                {c.l.map((i) => (
                  <li key={i}><a href="#" className="hover:underline">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 md:flex-row md:justify-between">
          <p>Copyright © 2026 Omen Inc. All rights reserved.</p>
          <p>Privacy · Terms · Legal · Sitemap</p>
        </div>
      </div>
    </footer>
  );
}
