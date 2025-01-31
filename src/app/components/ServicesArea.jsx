import { FaArrowRight } from "react-icons/fa";
import mongoDB, { collectionNames } from "@/lib/mongoDB";
import Image from "next/image";
import Link from "next/link";

export default async function ServicesArea() {
    const servicesData = mongoDB(collectionNames.serviceCollection);
    const services = await servicesData.find({}).toArray();

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-10">{
        services.map(service => (
            <div key={service?._id} className="p-4 bg-base-100 bg-opacity-60 shadow border border-gray-300 rounded-box">
                <Image className="rounded-lg w-full h-[208px]" src={service?.img} alt={service?.title} width={314} height={208} />

                <div className="pt-3 flex justify-between items-center">
                    <div className="space-y-2">
                    <h4 className="text-gray-700 text-2xl font-bold">{service?.title}</h4>
                    <p className="text-xl text-[#FF3811] font-bold">Price: ${service?.price}</p>
                    </div>

                    <Link href={`/service/${service?._id}`} className="text-[#FF3811] font-semibold">
                    <FaArrowRight className="text-xl" />
                    </Link>
                </div>
            </div>
        ))
    }</div>
  )
}
