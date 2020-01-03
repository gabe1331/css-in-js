import React from 'react'
import ServiceItem from './ServiceItem'

const Services = ({services}) => {
    return (
        <section style={sectionStyle} className="services container row">
            {services.map((service)=> (
                <ServiceItem key={service.id} service={service}/>
            ))}
        </section>
    )
}

export default Services

// Vanilla CSS in JS
const sectionStyle = {
    padding: "10px"
}
