import { PageHeader } from "../page-header";
import { TextInputPanel } from "../text-to-speech/input-panel";
import { QuickActionsPanel } from "../text-to-speech/quick-actions-panel";
import { DashboardHeader } from "./header";
import { HeroPattern } from "./hero-pattern";

export const DashboardView = () => {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
};
