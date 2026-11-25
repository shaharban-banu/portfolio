import AgentGraph from "./AgentGraph";

// Featured-project visual: the agent graph, or a simple pipeline of steps.
export default function Visual({ visual }) {
  if (visual === "agents") return <AgentGraph />;
  return (
    <ol className="flex flex-col items-stretch gap-2 rounded-xl border border-line bg-card p-6">
      {visual.map((step, i) => (
        <li key={step} className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent text-sm text-accent">{i + 1}</span>
          <span className="flex-1 rounded-md border border-line px-4 py-2">{step}</span>
        </li>
      ))}
    </ol>
  );
}
