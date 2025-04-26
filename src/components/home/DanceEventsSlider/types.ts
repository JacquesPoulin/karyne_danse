export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description?: string;
  fullDate?: string; // Format YYYY-MM-DD pour faciliter la comparaison (optionnel)
}

export type MonthEvents = {
  [month: string]: Event[];
};

export interface EventCardProps {
  event: Event;
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