function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-10">
      <h2
        className={`text-3xl md:text-5xl font-bold ${
          light ? "text-white" : "text-brand dark:text-brand-soft"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg ${
            light ? "text-white/80" : "text-ink-soft dark:text-white/70"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gold" />
    </div>
  );
}

export default SectionHeading;