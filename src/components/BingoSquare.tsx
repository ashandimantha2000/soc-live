import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-80 disabled:cursor-default';

  const stateClasses = square.isFreeSpace
    ? 'bg-accent/10 border-accent text-accent'
    : square.isMarked
      ? isWinning
        ? 'bg-bingo/10 border-bingo text-bingo'
        : 'bg-marked/10 border-marked-border text-marked-border'
      : 'bg-zinc-950/40 border-white/10 text-zinc-200 hover:bg-white/5 active:bg-white/10';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-marked-border text-xs">✓</span>
      )}
    </button>
  );
}
