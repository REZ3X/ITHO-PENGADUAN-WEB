import React from 'react';

const services = [
    {name: 'Smart E School', iconSrc: 'https://smarteschool.id/img/ss-logo-icon.png'},
    {name: 'GoSports', iconSrc: 'https://gosports.id/img/logo-svg.svg'},
    {name: 'KantinGo', iconSrc: 'https://kantingo-admin.smarteschool.net/assets/logo-kantingo.svg'},
    // Add more services as needed
];

const AllServices = () => {
    return (
        <div className="flex text-white align-baseline flex-col justify-center items-center mt-4 h-18 backdrop-blur-2xl">
            <h1>Layanan Kami</h1>
            <div className={`flex flex-row`}>
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center m-4">
                        <img src={service.iconSrc} alt={`${service.name} icon`} className="mb-2 w-10"/>
                        <h3 className="text-xs font-semibold ">{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllServices;