export interface Program {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  frequency: string; // e.g. "Weekdays", "Weekly", "Daily"
  category: string; // e.g. "Health", "Safety", "Civic Education"
}

export type ProgramData = Program[];