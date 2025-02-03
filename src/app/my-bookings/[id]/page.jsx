import UpdateCheckOutForm from "@/app/components/UpdateCheckOutForm";
import { headers } from "next/headers";

export default async function UpdateBooking({ params }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/booking/${id}`, {
    headers: await headers(),
  });
  const service = await response.json();

  return (
    <div>
      <UpdateCheckOutForm service={service} />
    </div>
  );
}
