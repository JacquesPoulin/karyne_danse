// Import des types depuis le fichier centralisé
import { Event as GlobalEvent, MonthEvents as GlobalMonthEvents } from '@/types/events';

export type { GlobalEvent as Event, GlobalMonthEvents as MonthEvents };

export interface EventCardProps {
  event: GlobalEvent;  // Utilisation du type importé
  isExpanded: boolean;
  onToggleExpand: () => void;
  imageError: boolean;
  onImageError: () => void;
}

export interface MonthSelectorProps {
  months: string[];
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

export interface NoEventsProps {
  month: string;
}