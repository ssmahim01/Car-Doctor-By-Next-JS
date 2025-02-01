"use client";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function CheckOutForm({ service }) {
  const { data: session } = useSession();
  const handleBookService = async (e) => {
    e.preventDefault();
    toast("Submitting Booking...", {
      position: "top-center",
    });

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const bookingData = {
      customerName: name,
      email,
      date,
      phone,
      address,
      // Service information
      service_id: service._id,
      service_name: service.title,
      service_img: service.img,
      service_price: service.price,
    };

    const res = await fetch("http://localhost:3000/api/service", {
      method: "POST",
      body: JSON.stringify(bookingData),
    });
    // console.log(res);
    if (res.ok) {
      toast.success("Successfully booked", {
        position: "top-center",
      });
      form.reset();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="my-10">
      <div className="lg:w-3/5 md:w-4/5 w-11/12 mx-auto shadow-md p-5">
        <h2 className="text-center font-bold md:text-3xl text-2xl mb-4">
          Book Service : {service?.title}
        </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={session?.user?.name}
                readOnly
                type="text"
                name="name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={session?.user?.email}
                readOnly
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                defaultValue={service?.price}
                readOnly
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <input
              className="btn bg-teal-600 border-none text-white font-bold text-base lg:w-2/5 md:w-3/5 mx-auto btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
