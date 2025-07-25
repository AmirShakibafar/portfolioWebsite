export const ShimmerText = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-relaxed text-[24px] mb-8 animate-shimmer bg-clip-text text-right text-transparent bg-[linear-gradient(110deg,#334155,45%,#e2e8f0,55%,#334155)] bg-[length:200%_100%]">
    {children}
  </p>
);