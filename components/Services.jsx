import Image from "next/image";

const services = [
     {
          icon: "assets/services/icon-1.svg",
          title: "Service 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper eros at ex scelerisque, at eleifend mauris convallis. Integer vel est vel nisi faucibus finibus."
     },
     {
          icon: "assets/services/icon-2.svg",
          title: "Service 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper eros at ex scelerisque, at eleifend mauris convallis. Integer vel est vel nisi faucibus finibus."
     },
     {
          icon: "assets/services/icon-3.svg",
          title: "Service 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper eros at ex scelerisque, at eleifend mauris convallis. Integer vel est vel nisi faucibus finibus."
     },
     {
          icon: "assets/services/icon-4.svg",
          title: "Service 4",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper eros at ex scelerisque, at eleifend mauris convallis. Integer vel est vel nisi faucibus finibus."
     },
]
const Services = () => {
     return (
          <section className="relative z-40">
               <div className="container mx-auto">
                    <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
                    gap-[20px] -top-12 place-items-center lg:place-items-stretch">
                         {services.map((service, index) => {
                              return (
                                   <li key={index} className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none
                                   rounded-lg">
                                        <Image
                                             src={service.icon}
                                             width={48}
                                             height={48}
                                             alt=""
                                             className="mb-4"
                                        />
                                        <h3 className="text-[20px] text-primary font-semibold mb-3">{service.title}</h3>
                                        <p className="text-[15px]">{service.description}</p>
                                   </li>
                              );
                         })}
                    </ul>
               </div>
          </section>
     );
};

export default Services