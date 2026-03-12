"use client";

import { TextInputPanel } from "./input-panel";
import { VoicePreviewPlaceHolder } from "./voice-preview-place-holder";
import { SettingsPanel } from "./settings-panel";

import { TextToSpeechForm, defaultTTSFormValues } from "./form";

export const TextToSpeechView = () => {
  return (
    <TextToSpeechForm defaultValues={defaultTTSFormValues}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <TextInputPanel />
          <VoicePreviewPlaceHolder />
        </div>
        <SettingsPanel />
      </div>
    </TextToSpeechForm>
  );
};
