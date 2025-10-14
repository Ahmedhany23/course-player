export interface IVideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  title?: string;
  className?: string;
  onEnded?: () => void;
}
