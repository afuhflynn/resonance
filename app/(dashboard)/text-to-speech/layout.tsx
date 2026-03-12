import { PageHeader } from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text to Speech",
  description: "Generate speech from text",
};

const TestToSpeechLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <PageHeader title="Text to Speech" />
      {children}
    </div>
  );
};

export default TestToSpeechLayout;
