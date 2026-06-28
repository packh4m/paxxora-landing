"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Leaderboard", href: "#" },
  ],
  Analysis: [
    { name: "Harmony", href: "#" },
    { name: "Angularity", href: "#" },
    { name: "Dimorphism", href: "#" },
    { name: "AI Vision Score", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "TikTok", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Paxxora</span>
                <span className="text-xs text-muted-foreground font-mono">TM</span>
              </a>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Precision facial analysis. 33 metrics. Brutal honesty. Know your face, own your improvement.
              </p>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Paxxora. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            For those serious about self-improvement.
          </p>
        </div>
      </div>
    </footer>
  );
}