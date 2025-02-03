import { headers } from "next/headers";
import MyBookingsTable from "../components/MyBookingsTable";
const fetchAllBookings = async () => {
  const response = await fetch("http://localhost:3000/api/service", {
    headers: await headers(),
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
