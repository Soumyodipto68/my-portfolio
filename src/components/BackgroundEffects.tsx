const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="ambient-glow absolute -left-24 -top-24 h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(91,33,182,0.2),transparent_68%)] blur-3xl" />
      <div className="ambient-glow absolute -bottom-48 -right-40 h-120 w-120 rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.12),transparent_68%)] blur-3xl" style={{ animationDelay: "-7s" }} />
      <div className="ambient-scanline absolute left-0 top-1/3 h-px w-1/3 bg-linear-to-r from-transparent via-violet-400/25 to-transparent" />
      <span className="floating-dot floating-dot--violet left-[12%] top-[22%]" />
      <span className="floating-dot floating-dot--blue left-[38%] top-[16%]" style={{ animationDelay: "-2s" }} />
      <span className="floating-dot floating-dot--violet right-[18%] top-[28%]" style={{ animationDelay: "-4s" }} />
      <span className="floating-dot floating-dot--blue right-[31%] top-[64%]" style={{ animationDelay: "-1s" }} />
      <span className="floating-dot floating-dot--violet bottom-[18%] left-[22%]" style={{ animationDelay: "-5s" }} />
      <span className="floating-dot floating-dot--blue bottom-[12%] right-[12%]" style={{ animationDelay: "-3s" }} />
    </div>
  );
};

export default BackgroundEffects;