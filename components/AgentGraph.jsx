// Diagram of the ExecuMind AI architecture: an orchestrator coordinating four agents.
const agents = [
  { label: "Data Intelligence", x: 78, y: 62 },
  { label: "Customer Intelligence", x: 342, y: 62 },
  { label: "Forecasting", x: 78, y: 258 },
  { label: "Executive Advisor", x: 342, y: 258 },
];

export default function AgentGraph() {
  return (
    <figure className="graph">
      <svg viewBox="0 0 420 320" role="img" aria-label="ExecuMind AI: an orchestrator coordinating four agents" className="w-full">
        {agents.map((a) => (
          <line key={a.label} x1="210" y1="160" x2={a.x} y2={a.y} stroke="var(--signal)" strokeWidth="1.5" className="flow" />
        ))}
        {agents.map((a) => (
          <g key={a.label}>
            <rect x={a.x - 66} y={a.y - 18} width="132" height="36" rx="8" fill="var(--bg)" stroke="var(--line)" strokeWidth="1.5" className="node" />
            <text x={a.x} y={a.y + 4} textAnchor="middle" fontSize="12" fill="var(--fg)">{a.label}</text>
          </g>
        ))}
        <circle cx="210" cy="160" r="38" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
        <text x="210" y="164" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--fg)">LangGraph</text>
      </svg>
      <figcaption className="mt-2 text-sm text-muted">ExecuMind AI: four agents coordinated by LangGraph.</figcaption>
    </figure>
  );
}
