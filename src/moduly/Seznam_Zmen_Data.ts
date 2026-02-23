export interface LogZmena {
  datum: string;
  verze: string;
  popis: string;
}

export const HISTORIE_ZMEN: LogZmena[] = [
  { datum: "2026-02-23 11:00", verze: "V0.1.20", popis: "Major update: Nested folders, VOKS coding, SOS trigger (3x tap), Smart Bar enhancements and Glassmorphism UI." },
  { datum: "2026-02-23 10:45", verze: "B0.1.16", popis: "Implementace SOS editoru pro nouzové situace a rychlá volba SmartBar." },
  { datum: "2026-02-23 10:10", verze: "B0.1.15", popis: "Rozšíření slovní zásoby a příprava na automatickou synchronizaci piktogramů." },
  { datum: "2026-02-23 09:50", verze: "B0.1.13", popis: "Nová struktura informací o projektu a vylepšený vizuál modálu." },
  { datum: "2026-02-23 09:40", verze: "B0.1.12", popis: "Rebranding systému na Piktos by Synthesis studio." },
  { datum: "2026-02-23 09:11", verze: "B0.1.6", popis: "Implementace logů (Changelog) a ikony historie." },
  { datum: "2026-02-23 09:05", verze: "B0.1.5", popis: "Oprava synchronizace API a přidání nouzového režimu." },
  { datum: "2026-02-23 08:50", verze: "B0.1.4", popis: "Adaptivní denní rytmus a časové filtry kategorií." },
  { datum: "2026-02-22 23:30", verze: "B0.1.2", popis: "Vizuální upgrade na Professional Glassmorphism." },
  { datum: "2026-02-22 22:15", verze: "B0.1.1", popis: "Korekce rodinných vazeb v manifestu projektu." },
  { datum: "2026-02-22 21:00", verze: "B0.1.0", popis: "Informační manifest (Účel, zdroje ARASAAC)." },
  { datum: "2026-02-22 19:45", verze: "B0.0.8", popis: "Integrace záložního API Pixabay." },
  { datum: "2026-02-22 18:30", verze: "B0.0.6", popis: "Kompaktní mřížka rozcestníku a tlačítka ANO/NE." }
];
