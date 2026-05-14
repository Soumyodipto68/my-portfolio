interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({
  title,
}: SectionHeadingProps) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-[#3fb950] font-mono text-xl">
        //
      </span>

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <div className="flex-1 h-px bg-[#30363d]" />
    </div>
  );
};

export default SectionHeading;