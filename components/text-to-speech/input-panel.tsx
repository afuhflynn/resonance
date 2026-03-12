"use client";

import { searchParamsSchema } from "@/lib/nuqs";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useQueryStates } from "nuqs";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Coins } from "lucide-react";
import { Badge } from "../ui/badge";
import { TEXT_MAX_LENGTH } from "./data/constants";

export const TextInputPanel = () => {
  const [params, setParams] = useQueryStates(searchParamsSchema);
  const [text, setText] = useState("");
  const router = useRouter();

  const handleGenerate = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    router.push(`/text-to-speech?prompt=${encodeURIComponent(trimmed)}`);
  };
  return (
    <div
      className={cn(
        "rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_muted]",
      )}
    >
      <div className="rounded-[20px] bg-muted p-1">
        <form
          className="space-y-4 rounded-2xl bg-muted p-4 drop-shadow-xs"
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
        >
          <Textarea
            placeholder="Start typing or paste your text here..."
            className="min-h-35 resize-none border-0 bg-transparent shadow-none focus-visible:ring-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleGenerate();
              }
            }}
          />

          <div className="flex items-center justify-between">
            <Badge variant={"outline"} className="gap-1.5 border-dashed">
              <Coins className="size-3 text-chart-5" />
              <span>
                {text.length === 0 ? (
                  "Start typing to estimate"
                ) : (
                  <>
                    <span className="tabular-nums">
                      ${(text.length * 0.0003).toFixed(4)} estimated
                    </span>
                  </>
                )}
              </span>
            </Badge>
            <span className="text-xs text-muted-foreground">
              {text.length.toLocaleString("en-US")} /{" "}
              {TEXT_MAX_LENGTH.toLocaleString("en-US")} characters
            </span>
          </div>

          <div className="flex items-center justify-end p-3">
            <Button
              size={"sm"}
              disabled={!text.trim()}
              type="submit"
              className="w-full lg:w-auto"
            >
              Generate speech
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
