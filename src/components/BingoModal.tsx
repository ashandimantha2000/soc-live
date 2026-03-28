interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-950 rounded-xl p-6 max-w-xs w-full text-center shadow-xl border border-white/10 ring-1 ring-accent/30 animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-bingo mb-2">BINGO!</h2>
        <p className="text-zinc-300 mb-6">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-accent/90 active:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
