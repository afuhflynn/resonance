import { WavyBackground } from "../ui/wavy-background";

export const HeroPattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <WavyBackground
        colors={["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8"]}
        blur={3}
        speed="slow"
        waveOpacity={0.1}
        waveWidth={60}
        waveYOffset={250}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
};
