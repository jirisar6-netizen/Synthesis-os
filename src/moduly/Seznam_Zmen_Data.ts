export interface LogZmena {
  datum: string;
  verze: string;
  popis: string;
}

export const HISTORIE_ZMEN: LogZmena[] = [
  { datum: "2026-02-23 09:11", verze: "B0.1.6", popis: "Implementace logů (Changelog) a ikony historie." },
  { datum: "2026-02-23 09:05", verze: "B0.1.5", popis: "Oprava synchronizace API a přidání nouzového režimu." },
  { datum: "2026-02-23 08:50", verze: "B0.1.4", popis: "Adaptivní denní rytmus a časové filtry kategorií." },
  { datum: "2026-02-22 23:30", verze: "B0.1.2", popis: "Vizuální upgrade na Professional Glassmorphism." },
  { datum: "2026-02-22 22:15", verze: "B0.1.1", popis: "Korekce rodinných vazeb v manifestu projektu." },
  { datum: "2026-02-22 21:00", verze: "B0.1.0", popis: "Informační manifest (Účel, zdroje ARASAAC)." },
  { datum: "2026-02-22 19:45", verze: "B0.0.8", popis: "Integrace záložního API Pixabay." },
  { datum: "2026-02-22 18:30", verze: "B0.0.6", popis: "Kompaktní mřížka rozcestníku a tlačítka ANO/NE." }
];
