import { ExternalLink, Award } from "lucide-react";

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  credentialUrl: string;
  type: "Micro-Credential" | "Workshop" | "Coursework";
}

const certifications: Certification[] = [
  {
    title: "Introduction to AI Literacy and Responsible Use",
    issuer: "Mapúa University & CHED",
    date: "Sep 2026",
    description:
      "Micro-credentials course covering artificial intelligence fundamentals, ethical AI frameworks, data privacy, and responsible technology usage.",
    credentialId: "Y8Z48Q66YEAQZ",
    credentialUrl: "/certificates/Lopez_ClassOf2026__issued.pdf",
    type: "Micro-Credential",
  },
  {
    title: "Sui Move Smart Contract Developer (Level 1)",
    issuer: "DEVCON Sui Move Code Camp",
    date: "May 2026",
    description:
      "Completed hands-on smart contract developer training. Authored, compiled, and published Move package modules and decentralized objects on the Sui Blockchain Testnet.",
    credentialUrl: "/certificates/Lopez - Sui Cert.pdf",
    type: "Workshop",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy / BukSU",
    date: "2025",
    description:
      "Covers intermediate enterprise networking principles, including VLAN segmentation, inter-VLAN routing, EtherChannel bundling, STP, WLAN configurations, and Layer 2 security hardening.",
    credentialUrl:
      "/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_2301106198-student-buksu-edu-ph_cf66febd-01aa-4282-9358-44c28169085f.pdf",
    type: "Coursework",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy / BukSU",
    date: "2025",
    description:
      "Covers foundational network architecture, IPv4/IPv6 addressing, subnetting, Ethernet switching fundamentals, network security basics, and initial router/switch configuration in Cisco IOS.",
    credentialUrl:
      "/certificates/_certificate_2301106198-student-buksu-edu-ph_995d1e13-f1bd-440a-88d1-7126fbb1714c.pdf",
    type: "Coursework",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy / BukSU",
    date: "2025",
    description:
      "Covers fundamental JavaScript concepts including ES6+ syntax, control flow, functions, arrays, objects, and scope. Validates core scripting and algorithmic problem-solving skills.",
    credentialUrl:
      "/certificates/JavaScript_Essentials_1_certificate_2301106198-student-buksu-edu-ph_994a3655-fba2-41c2-b384-a92a724c8777.pdf",
    type: "Coursework",
  },
];

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 mx-auto max-w-5xl px-5 py-12 md:py-20 lg:py-24"
    >
      <div className="mb-6">
        <h2 className="font-space-grotesk text-4xl font-bold tracking-tight text-primary sm:text-3xl md:text-5xl">
          CERTIFICATIONS
        </h2>
      </div>

      <div
        role="region"
        aria-label="Certifications"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
          >
            <div>
              {/* Badge & Type */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-plus-jakarta-sans text-xs font-semibold text-slate-700">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  {cert.type}
                </span>
                <span className="font-plus-jakarta-sans text-xs font-medium text-slate-400">
                  {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="font-space-grotesk text-xl font-bold leading-snug text-slate-950 group-hover:text-primary transition-colors duration-200 mb-1">
                {cert.title}
              </h3>
              <p className="font-plus-jakarta-sans text-xs font-semibold text-slate-500 mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="font-plus-jakarta-sans text-sm leading-relaxed text-slate-600 mb-4">
                {cert.description}
              </p>
            </div>

            {/* Footer / ID & Link */}
            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              {cert.credentialId ? (
                <span className="font-mono text-[11px] text-slate-400">
                  ID:{" "}
                  <span className="font-semibold text-slate-600">
                    {cert.credentialId}
                  </span>
                </span>
              ) : (
                <span />
              )}

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify credential for ${cert.title}`}
                className="inline-flex items-center gap-1.5 font-plus-jakarta-sans text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                Verify
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
