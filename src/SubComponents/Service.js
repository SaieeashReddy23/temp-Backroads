const Service = ({ id, icon, title, text }) => {
  const iconImage = `fas fa-${icon} fa-fw"`
  return (
    <article className="service" key={id}>
      <span className="service-icon">
        <i className={iconImage}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  )
}
export default Service
