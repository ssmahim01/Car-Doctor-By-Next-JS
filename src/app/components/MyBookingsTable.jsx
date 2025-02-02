"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function MyBookingsTable({ bookings }) {
  const router = useRouter();
  const handleDeleteBooking = async (id) => {
    const response = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    // console.log(data);
    if (response.ok) {
      toast.success("Deleted booking", {
        position: "top-center",
      });
      router.refresh();
    }else{
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="my-8">
      <h1 className="text-center font-bold text-3xl my-5">My Bookings</h1>
      <div className="w-11/12 mx-auto overflow-x-auto">
        <table className="w-full table table-zebra">
          <thead className="border">
            <tr className="*:text-gray-700">
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => {
              return (
                <tr key={booking?._id} className="border">
                  <td>
                    <Image
                      src={booking?.service_img}
                      alt={booking?.service_name}
                      className="rounded-md"
                      width={70}
                      height={70}
                    />
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {booking?.service_name}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {booking?.date}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {booking?.service_price}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {booking?.phone}
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {booking?.address}
                  </td>
                  <td>
                    <Link
                      className="btn btn-ghost"
                      href={`/my-bookings/${booking?._id}`}
                    >
                      <FaRegEdit className="h-8 w-8 font-bold" />
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDeleteBooking(booking?._id)}
                      className="btn btn-ghost"
                    >
                      <FaTrashAlt className="w-7 h-7 font-bold" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
