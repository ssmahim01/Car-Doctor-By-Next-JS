import CheckOutForm from "@/app/components/CheckOutForm";

export default async function Checkout({params}) {
    const {id} = await params;
    const response = await fetch(`https://car-doctor-by-next-js.vercel.app/api/service/${id}`);
    const service = await response.json();
 
  return (
    <div>
      <CheckOutForm service={service} />
    </div>
  )
}
