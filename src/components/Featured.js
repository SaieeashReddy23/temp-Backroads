import { toursData } from '../data'
import Title from '../SubComponents/Title'
import TourCard from '../SubComponents/TourCard'

const Featured = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <TourCard key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}
export default Featured
