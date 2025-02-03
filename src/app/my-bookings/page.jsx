import { headers } from "next/headers";
import MyBookingsTable from "../components/MyBookingsTable";
const fetchAllBookings = async () => {
  const response = await fetch("https://car-doctor-by-next-js.vercel.app/api/service", {
    headers: new Headers(await headers()),
  });
  const data = await response.json();
  return data;
};

export default async function MyBookings() {
  const bookings = await fetchAllBookings();

  return (
    <div>
      <MyBookingsTable bookings={bookings} />
    </div>
  );
}
