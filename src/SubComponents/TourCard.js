const TourCard = ({
  id,
  tourDate,
  tourTitle,
  tourCountry,
  days,
  cost,
  img,
}) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourTitle}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {tourCountry}
          </p>
          <p>{days} days</p>
          <p>from {cost}</p>
        </div>
      </div>
    </article>
  )
}
export default TourCard
