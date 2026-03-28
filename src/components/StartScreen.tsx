interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-linear-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100">
      <div className="text-center max-w-sm w-full">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-2">Soc Ops</h1>
        <p className="text-lg text-zinc-300 mb-8">Social Bingo</p>

        <div className="bg-zinc-950/60 backdrop-blur rounded-xl p-6 shadow-lg border border-white/10 ring-1 ring-accent/20 mb-8">
          <h2 className="font-semibold text-zinc-100 mb-3">How to play</h2>
          <ul className="text-left text-zinc-300 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors hover:bg-accent/90 active:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
