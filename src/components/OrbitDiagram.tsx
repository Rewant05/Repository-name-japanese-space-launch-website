export function OrbitDiagram({ compact = false }: { compact?: boolean }) {
  return <div className={`orbit-diagram ${compact ? 'compact' : ''}`} aria-label="衛星軌道イメージ">
    <div className="orbit-coordinates"><span>35°37' N</span><span>ASC NODE</span></div>
    <div className="planet"><div /></div>
    <div className="orbit-ring ring-one"><span className="satellite"><i /><i /></span></div>
    <div className="orbit-ring ring-two" />
    <div className="crosshair x" /><div className="crosshair y" />
    <div className="orbit-readout"><b>LEO 520</b><small>KM / SSO</small></div>
  </div>
}
