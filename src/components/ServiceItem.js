import React from 'react'

const ServiceItem = ({service}) => {
    let {icon, title} = service
    return (
        <div className="services__service">
            <i className={"services__icon " + icon}></i>
            <h3 className="services__title">{title}</h3>
        </div>
    )
}

export default ServiceItem
