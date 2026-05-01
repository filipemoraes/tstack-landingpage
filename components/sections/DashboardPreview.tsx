function NavIco({ children }: { children: React.ReactNode }) {
  return <span className="w-3.5 h-3.5 opacity-90 inline-flex">{children}</span>;
}

function NavItem({
  active = false,
  icon,
  children,
}: {
  active?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`px-3 py-[9px] rounded-lg text-[13.5px] flex items-center gap-2.5 ${
        active ? "db-nav-active-bg text-c-800 font-medium" : "text-muted"
      }`}
    >
      <NavIco>{icon}</NavIco>
      {children}
    </div>
  );
}

function Chip({
  active = false,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`font-mono text-[10.5px] tracking-[.08em] px-[9px] py-1 rounded-full uppercase border ${
        active ? "text-c-800 border-c-200 db-chip-active-bg" : "text-muted border-line bg-white"
      }`}
    >
      {children}
    </div>
  );
}

const rows = [
  ["credito.emitido #48291", "0x8fa3…e21c", "#62.841.203", "há 4s", "ok"],
  ["transacao.validada #48290", "0x2d01…9f47", "#62.841.202", "há 12s", "ok"],
  ["documento.assinado #48289", "0xa7c9…1b83", "...", "há 18s", "pending"],
  ["consumo.apurado #48288", "0xf3e2…c45a", "#62.841.201", "há 26s", "ok"],
  ["credito.transferido #48287", "0x5b28…7d91", "#62.841.200", "há 34s", "ok"],
] as const;

const statusClasses = {
  ok: "tx-status text-[#0AA65F] bg-[#E8F7EE] border-[#C6E9D3]",
  pending: "tx-status text-[#B87A00] bg-[#FFF6E0] border-[#F0DEA1]",
  error: "tx-status text-[#C13C1D] bg-[#FDEAE3] border-[#F3C4B5]",
};

export function DashboardPreview() {
  return (
    <div className="rounded-[14px] bg-white overflow-hidden">
      {/* top bar */}
      <div className="flex items-center px-4 py-3 border-b border-line gap-2.5 bg-[#FAFBFD]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8DCE6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8DCE6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8DCE6]" />
        </div>
        <div className="ml-3.5 font-mono text-xs text-muted-2 px-3 py-[5px] rounded-md bg-white border border-line">
          app.suamarca.com/t-stack/transacoes
        </div>
      </div>

      {/* body */}
      <div className="grid min-h-[440px] max-[900px]:grid-cols-1 grid-cols-[220px_1fr]">
        {/* sidebar */}
        <aside className="max-[900px]:hidden border-r border-line py-5 px-3.5 flex flex-col gap-0.5 bg-[#FBFCFE]">
          <div className="flex items-center gap-2.5 text-ink no-underline px-2 pb-[18px] text-sm">
            <span className="logo-mark !w-[22px] !h-[22px]" />
            <span>Sua Marca</span>
          </div>

          <NavItem
            icon={
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="2" width="5" height="5" />
                <rect x="9" y="2" width="5" height="5" />
                <rect x="2" y="9" width="5" height="5" />
                <rect x="9" y="9" width="5" height="5" />
              </svg>
            }
          >
            Visão geral
          </NavItem>
          <NavItem
            active
            icon={
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M2 4h12M2 8h12M2 12h12" />
              </svg>
            }
          >
            Transações
          </NavItem>
          <NavItem
            icon={
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="8" cy="8" r="6" />
                <path d="M8 4v4l3 2" />
              </svg>
            }
          >
            Auditoria
          </NavItem>
          <NavItem
            icon={
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M2 12l4-4 3 3 5-5" />
              </svg>
            }
          >
            Insights IA
          </NavItem>

          <div className="font-mono text-[10px] tracking-[.12em] text-muted-2 uppercase px-3 pt-[18px] pb-2">
            Config
          </div>

          <NavItem
            icon={
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M8 3l5 3v4l-5 3-5-3V6z" />
              </svg>
            }
          >
            API keys
          </NavItem>
          <NavItem
            icon={
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="8" cy="8" r="2" />
                <path d="M8 2v2M8 12v2M2 8h2M12 8h2" />
              </svg>
            }
          >
            Webhooks
          </NavItem>
        </aside>

        {/* main */}
        <div className="p-[26px] bg-white">
          <div className="flex justify-between items-start gap-5 flex-wrap">
            <div>
              <h3 className="text-[22px] font-medium">Transações registradas</h3>
              <p className="text-[13px] mt-1 text-muted">
                Prova imutável de cada evento crítico da operação
              </p>
            </div>
            <div className="flex gap-2">
              <Chip active>24h</Chip>
              <Chip>7d</Chip>
              <Chip>30d</Chip>
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-4 max-[700px]:grid-cols-2 gap-3 mt-6">
            <div className="px-[18px] py-4 border border-line rounded-xl bg-[#FBFCFE]">
              <div className="text-[11.5px] text-muted-2 uppercase tracking-[.08em]">
                Eventos registrados
              </div>
              <div className="font-display text-[26px] font-medium mt-1.5 -tracking-[.02em] text-ink">
                1.284.903
              </div>
              <div className="text-xs text-[#0AA65F] mt-1 font-mono">↑ 12.4%</div>
            </div>
            <div className="px-[18px] py-4 border border-line rounded-xl bg-[#FBFCFE]">
              <div className="text-[11.5px] text-muted-2 uppercase tracking-[.08em]">
                Taxa de sucesso
              </div>
              <div className="font-display text-[26px] font-medium mt-1.5 -tracking-[.02em] text-ink">
                99.97%
              </div>
              <div className="text-xs text-[#0AA65F] mt-1 font-mono">↑ 0.02%</div>
            </div>
            <div className="px-[18px] py-4 border border-line rounded-xl bg-[#FBFCFE]">
              <div className="text-[11.5px] text-muted-2 uppercase tracking-[.08em]">
                Tempo médio
              </div>
              <div className="font-display text-[26px] font-medium mt-1.5 -tracking-[.02em] text-ink">
                1.8<small className="text-[18px] text-muted font-normal tracking-normal">s</small>
              </div>
              <div className="text-xs text-[#D4573A] mt-1 font-mono">↑ 0.1s</div>
            </div>
            <div className="px-[18px] py-4 border border-line rounded-xl bg-[#FBFCFE]">
              <div className="text-[11.5px] text-muted-2 uppercase tracking-[.08em]">
                Custo do período
              </div>
              <div className="font-display text-[26px] font-medium mt-1.5 -tracking-[.02em] text-ink">
                R$ 342
              </div>
              <div className="text-xs text-[#0AA65F] mt-1 font-mono">↓ 8.1%</div>
            </div>
          </div>

          {/* table */}
          <div className="mt-6 border border-line rounded-xl overflow-hidden">
            <div className="px-[18px] py-3.5 border-b border-line flex justify-between items-center text-[13px] bg-[#FBFCFE]">
              <strong className="font-medium text-ink">Últimos registros</strong>
              <div className="flex gap-1.5">
                <Chip active>Todos</Chip>
                <Chip>OK</Chip>
                <Chip>Pendente</Chip>
                <Chip>Erro</Chip>
              </div>
            </div>
            <table className="w-full border-collapse text-[13px] bg-white">
              <thead>
                <tr>
                  {["Evento", "Hash", "Bloco", "Horário", "Status"].map((th) => (
                    <th
                      key={th}
                      className="text-left px-[18px] py-3.5 border-b border-line font-mono text-[10.5px] uppercase tracking-[.1em] text-muted-2 font-medium bg-[#FBFCFE]"
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([evento, hash, bloco, horario, status], i) => (
                  <tr key={i}>
                    <td className="px-[18px] py-3.5 border-b border-line font-mono text-ink last:border-b-0">
                      {evento}
                    </td>
                    <td className="px-[18px] py-3.5 border-b border-line text-muted last:border-b-0">
                      <span className="font-mono text-[12.5px] text-accent">{hash}</span>
                    </td>
                    <td className="px-[18px] py-3.5 border-b border-line text-muted last:border-b-0">
                      {bloco}
                    </td>
                    <td className="px-[18px] py-3.5 border-b border-line text-muted last:border-b-0">
                      {horario}
                    </td>
                    <td className="px-[18px] py-3.5 border-b border-line text-muted last:border-b-0">
                      <span
                        className={`font-mono text-[10.5px] px-[9px] py-[3px] rounded-full uppercase tracking-[.08em] inline-flex gap-1.5 items-center border ${
                          statusClasses[status as keyof typeof statusClasses]
                        }`}
                      >
                        {status === "ok" ? "OK" : status === "pending" ? "Pendente" : "Erro"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
