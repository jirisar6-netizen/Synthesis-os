export interface PlanovanaCinnost {
  id: string;
  cas: string;
  label: string;
  hotovo: boolean;
}

export const POCATECNI_ROZVRH: PlanovanaCinnost[] = [
  { id: '1', cas: '08:00', label: 'vstávat', hotovo: false },
  { id: '2', cas: '08:30', label: 'snídaně', hotovo: false },
  { id: '3', cas: '09:00', label: 'zuby', hotovo: false },
  { id: '4', cas: '10:00', label: 'škola', hotovo: false },
  { id: '5', cas: '12:30', label: 'oběd', hotovo: false },
  { id: '6', cas: '15:00', label: 'hřiště', hotovo: false },
  { id: '7', cas: '18:30', label: 'koupání', hotovo: false },
  { id: '8', cas: '20:00', label: 'spát', hotovo: false }
];
