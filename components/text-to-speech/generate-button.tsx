"use client";

import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

interface props {
  size?: "default" | "sm";
  disabled: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
  className?: string;
}

export const GenerateButton = ({
  size,
  disabled,
  isSubmitting,
  onSubmit,
  className,
}: props) => {
  return (
    <Button
      className={className}
      size={size}
      disabled={disabled}
      onClick={onSubmit}
      type="submit"
    >
      {isSubmitting ? (
        <>
          <Spinner className="size-3" />
          Generating...
        </>
      ) : (
        "Generate speech"
      )}
    </Button>
  );
};
