import { quickActions } from "../dashboard/data/quick-actions";
import { QuickACtionCard } from "./quick-action-card";

export const QuickActionsPanel = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Quick actions</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 grid-cols-1">
        {quickActions.map((action) => (
          <QuickACtionCard
            key={action.title}
            title={action.title}
            description={action.description}
            gradient={action.gradient}
            href={action.href}
          />
        ))}
      </div>
    </div>
  );
};
