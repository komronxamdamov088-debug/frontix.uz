import type { ReactNode } from "react";
import { Bot, Check, ShoppingBag, Workflow as WorkflowIcon, ArrowRight as ArrowRightIcon } from "lucide-react";
import type { Service } from "@/data/services";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-ink/10 dark:border-white/10 bg-paper-2/50 dark:bg-white/[0.03] p-6">
      <div className="grain-gradient pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative w-full max-w-xs">{children}</div>
    </div>
  );
}

function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-ink/10 dark:border-white/10 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function WebsiteMockup() {
  return (
    <Frame>
      <BrowserChrome>
        <div className="h-16 rounded-lg bg-gradient-to-br from-brand-500/25 to-transparent" />
        <div className="mt-3 space-y-1.5">
          <div className="h-2 w-4/5 rounded-full bg-ink/10 dark:bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-ink/10 dark:bg-white/10" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-8 rounded-md bg-paper-2 dark:bg-white/[0.04]" />
          <div className="h-8 rounded-md bg-paper-2 dark:bg-white/[0.04]" />
          <div className="h-8 rounded-md bg-brand-500/20" />
        </div>
      </BrowserChrome>
    </Frame>
  );
}

function QrMenuMockup() {
  const cells = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1];
  return (
    <Frame>
      <div className="mx-auto flex w-40 flex-col items-center rounded-[1.5rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 p-4 shadow-soft">
        <div className="grid grid-cols-4 gap-1 rounded-lg bg-paper-2 dark:bg-white/5 p-2">
          {cells.map((c, i) => (
            <span key={i} className={`h-3 w-3 rounded-[2px] ${c ? "bg-ink dark:bg-paper" : "bg-transparent"}`} />
          ))}
        </div>
        <div className="mt-4 w-full space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-paper-2/70 dark:bg-white/[0.04] px-2.5 py-2">
              <div className="h-1.5 w-14 rounded-full bg-ink/15 dark:bg-white/15" />
              <div className="h-1.5 w-6 rounded-full bg-brand-500/50" />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function TelegramBotMockup() {
  return (
    <Frame>
      <div className="space-y-2.5">
        <div className="flex items-end gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink dark:bg-paper">
            <Bot size={13} className="text-paper dark:text-ink" />
          </span>
          <div className="max-w-[75%] space-y-1.5 rounded-2xl rounded-bl-sm bg-paper dark:bg-white/[0.05] px-3 py-2.5 shadow-soft">
            <div className="h-1.5 w-24 rounded-full bg-ink/15 dark:bg-white/15" />
            <div className="h-1.5 w-16 rounded-full bg-ink/15 dark:bg-white/15" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-br-sm bg-brand-500 px-3 py-2.5">
            <div className="h-1.5 w-20 rounded-full bg-white/70" />
          </div>
        </div>
        <div className="flex items-center gap-1 pl-9">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-ink/30 dark:bg-white/30" />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function OrderingMockup() {
  const items = [
    { price: "45 000" },
    { price: "28 000" },
    { price: "60 000" },
  ];
  return (
    <Frame>
      <div className="rounded-xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 p-4 shadow-soft">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
            <ShoppingBag size={14} />
          </span>
          <div className="h-2 w-20 rounded-full bg-ink/15 dark:bg-white/15" />
        </div>
        <div className="mt-3.5 space-y-2.5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="h-1.5 w-24 rounded-full bg-ink/10 dark:bg-white/10" />
              <span className="text-[10px] font-medium text-ink/50 dark:text-paper/50">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-3.5 flex items-center justify-between border-t border-ink/10 dark:border-white/10 pt-3">
          <span className="text-[11px] font-semibold">Jami</span>
          <span className="text-[11px] font-semibold text-brand-500">133 000 so'm</span>
        </div>
      </div>
    </Frame>
  );
}

function AutomationMockup() {
  return (
    <Frame>
      <div className="flex items-center justify-between">
        {[WorkflowIcon, ArrowRightIcon, Check].map((Icon, i) => (
          <div key={i} className="flex items-center">
            {i === 1 ? (
              <ArrowRightIcon size={16} className="text-ink/25 dark:text-paper/25" />
            ) : (
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-soft ${
                  i === 2
                    ? "border-brand-500/30 bg-brand-500/10 text-brand-500"
                    : "border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 text-ink/50 dark:text-paper/50"
                }`}
              >
                <Icon size={18} strokeWidth={1.75} />
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-1.5">
        <div className="mx-auto h-1.5 w-3/4 rounded-full bg-ink/10 dark:bg-white/10" />
        <div className="mx-auto h-1.5 w-1/2 rounded-full bg-ink/10 dark:bg-white/10" />
      </div>
    </Frame>
  );
}

function CustomSoftwareMockup() {
  const lines = [
    { w: "60%", c: "bg-brand-500/60" },
    { w: "85%", c: "bg-ink/15 dark:bg-white/15" },
    { w: "45%", c: "bg-ink/15 dark:bg-white/15" },
    { w: "70%", c: "bg-brand-500/40" },
    { w: "35%", c: "bg-ink/15 dark:bg-white/15" },
  ];
  return (
    <Frame>
      <BrowserChrome>
        <div className="space-y-2">
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[9px] text-ink/25 dark:text-paper/25">{i + 1}</span>
              <div className={`h-1.5 rounded-full ${line.c}`} style={{ width: line.w }} />
            </div>
          ))}
        </div>
      </BrowserChrome>
    </Frame>
  );
}

export const serviceMockups: Record<Service["slug"], () => React.JSX.Element> = {
  "website-development": WebsiteMockup,
  "qr-menu": QrMenuMockup,
  "telegram-bot": TelegramBotMockup,
  "online-ordering": OrderingMockup,
  "business-automation": AutomationMockup,
  "custom-software": CustomSoftwareMockup,
};
