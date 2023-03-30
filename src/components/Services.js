import { ServicesData } from '../data'
import Service from '../SubComponents/Service'
import Title from '../SubComponents/Title'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="services" />
      <div className="section-center services-center">
        {ServicesData.map((service) => {
          return <Service key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}
export default Services
