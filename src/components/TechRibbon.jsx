function TechRibbon({ items }) {
  const ribbonItems = [...items, ...items];

  return (
    <section className="section-shell py-4">
      <div className="section-card overflow-hidden py-4">
        <div className="ribbon-track">
          {ribbonItems.map((item, index) => (
            <span key={`${item}-${index}`} className="ribbon-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechRibbon;
