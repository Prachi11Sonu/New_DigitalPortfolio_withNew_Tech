function SectionHeading({ eyebrow, title, subtitle, variant = "default" }) {
  if (variant === "centered") {
    return (
      <div className="mb-10 text-center">
        {eyebrow ? (
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary/30" />
            <span className="pill bg-primary/10 text-primary">{eyebrow}</span>
            <span className="h-px w-10 bg-primary/30" />
          </div>
        ) : null}
        <h2 className="section-title mx-auto max-w-3xl">{title}</h2>
        {subtitle ? <p className="section-subtitle mx-auto text-center">{subtitle}</p> : null}
      </div>
    );
  }

  if (variant === "split") {
    return (
      <div className="mb-10 grid gap-5 lg:grid-cols-[auto_1fr] lg:items-start">
        <div className="rounded-[24px] border border-primary/10 bg-primary/8 px-5 py-4">
          {eyebrow ? <span className="pill bg-accent/10 text-primary">{eyebrow}</span> : null}
        </div>
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="mb-10 rounded-[28px] border border-primary/10 bg-primary/8 p-6 sm:p-7">
        {eyebrow ? (
          <span className="pill mb-4 border-accent/20 bg-accent/10 text-primary">{eyebrow}</span>
        ) : null}
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
    );
  }

  return (
    <div className="mb-10">
      {eyebrow ? (
        <span className="pill mb-4 bg-primary/10 text-primary">{eyebrow}</span>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default SectionHeading;
