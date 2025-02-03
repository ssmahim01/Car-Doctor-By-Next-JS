"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UpdateCheckOutForm({ service }) {
  const { data: session } = useSession();
  const router = useRouter();
  const handleUpdateService = async (e) => {
    e.preventDefault();
    toast("Updating Booking...", {
      position: "top-center",
    });

    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const updateData = {
      date,
      phone,
      address,
    };

    const res = await fetch(`https://car-doctor-by-next-js.vercel.app/api/booking/${service?._id}`, {
      method: "PATCH",
      body: JSON.stringify(updateData),
    });
    // console.log(res);
    if (res.ok) {
      toast.success("Successfully Updated", {
        position: "top-center",
      });

      router.push("/my-bookings");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="my-10">
      <div className="lg:w-3/5 md:w-4/5 w-11/12 mx-auto shadow-md p-5">
        <h2 className="text-center font-bold md:text-3xl text-2xl mb-4">
          Update Service : {service?.service_name}
        </h2>
        <form onSubmit={handleUpdateService}>
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
                defaultValue={service?.service_price}
                readOnly
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={service?.date}
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={service?.phone}
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
                defaultValue={service?.address}
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <input
              className="btn bg-neutral border-none text-white font-bold text-base lg:w-2/5 md:w-3/5 mx-auto btn-block"
              type="submit"
              value="Update Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
