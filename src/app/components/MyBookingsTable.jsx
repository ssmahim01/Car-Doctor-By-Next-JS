"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

export default function MyBookingsTable({ bookings }) {
  const router = useRouter();
  const handleDeleteBooking = async (id) => {
    const response = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    // console.log(data);
    router.refresh();
  };

  return (
    <div className="my-8">
      <h1 className="text-center font-bold text-3xl my-4">My Bookings</h1>
      <div className="w-11/12 mx-auto overflow-x-auto">
        <table className="w-full table table-zebra">
          <thead className="border">
            <tr>
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
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{booking?.service_name}</td>
                  <td>{booking?.date}</td>
                  <td>{booking?.service_price}</td>
                  <td>{booking?.phone}</td>
                  <td>{booking?.address}</td>
                  <td>
                    <Link href={`/my-bookings/${booking?._id}`}>
                      <FaRegEdit className="h-8 w-8 font-bold" />
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDeleteBooking(booking?._id)}
                      className="btn btn-ghost"
                    >
                      <FaTrashAlt className="w-8 h-8 font-bold" />
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
