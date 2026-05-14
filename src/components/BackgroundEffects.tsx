const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* TOP LEFT GLOW */}
      <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-[#3fb950]/20 rounded-full blur-[140px]" />

      {/* BOTTOM RIGHT GLOW */}
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px]" />

      {/* CENTER GLOW */}
      <div className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-[#3fb950]/10 rounded-full blur-[120px]" />

      {/* HEXAGON */}
      <div
        className="absolute top-32 right-32 w-40 h-40 border border-[#3fb950]/20"
        style={{
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        }}
      />

      {/* OCTAGON */}
      <div
        className="absolute bottom-40 left-20 w-52 h-52 border border-[#3fb950]/10 rotate-12"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
      />

      {/* PENTAGON */}
      <div
        className="absolute top-[60%] right-[20%] w-32 h-32 border border-[#3fb950]/20"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      />

      {/* SMALL HEX */}
      <div
        className="absolute top-[20%] left-[20%] w-24 h-24 border border-[#3fb950]/10 rotate-45"
        style={{
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;