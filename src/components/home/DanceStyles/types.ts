export interface DanceStyle {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  image: string;
}

export interface StyleCardProps {
  style: DanceStyle;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}