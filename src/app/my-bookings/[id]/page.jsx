import UpdateCheckOutForm from "@/app/components/UpdateCheckOutForm";
import { headers } from "next/headers";

export default async function UpdateBooking({ params }) {
  const { id } = await params;

  const response = await fetch(`https://car-doctor-by-next-js.vercel.app/api/booking/${id}`, {
    headers: new Headers(await headers()),
  });
  const service = await response.json();

  return (
    <div>
      <UpdateCheckOutForm service={service} />
    </div>
  );
}
