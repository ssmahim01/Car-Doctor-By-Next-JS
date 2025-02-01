import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetails({params}) {
    const {id} = await params;
   const response = await fetch(`http://localhost:3000/api/service/${id}`);
   const service = await response.json();

  return (
    <div className="w-11/12 mx-auto py-10">
        <section className="relative flex justify-center items-center">
        <figure>
            <Image
            src="/assets/images/checkout/checkout.png"
            alt="Banner image"
            width={1400}
            height={300}
            />
        </figure>

        <div className="overlay w-full h-full absolute left-0">
            <div className="w-full h-full flex items-center ps-32">
                <div className="lg:text-5xl md:text-3xl text-2xl">
                <h2 className="text-white font-bold">Service Details</h2>
                </div>
            </div>
        </div>
        </section>

        <section className="md:grid md:grid-cols-10 gap-6 my-12">
            <div className="lg:col-span-8 md:col-span-5">
            <figure>
                <Image 
                src={service?.img}
                alt={service?.title}
                className="w-full lg:h-[500px] h-96 rounded-md object-cover"
                referrerPolicy="no-referrer"
                width={800}
                height={500}
                />
            </figure>

            <div className="mt-6 space-y-4">
                <h3 className="lg:text-4xl md:text-3xl text-2xl text-gray-800 font-bold">{service?.title}</h3>
                <p className="text-gray-600 font-medium">{service?.description}</p>
            </div>
            </div>

            <div className="flex flex-col lg:col-span-2 md:col-span-5 md:my-0 my-4">
                <p className="text-gray-800 lg:text-2xl md:text-xl font-bold md:mb-4 mb-2">Price: ${service?.price}</p>

                <Link href={`/checkout/${service?._id}`}>
                <button className="w-full btn bg-[#FF3811] text-lg text-white font-bold rounded-md">
                    Proceed Checkout
                </button>
                </Link>
            </div>
        </section>
    </div>
  )
}