import CheckOutForm from "@/app/components/CheckOutForm";

export default async function Checkout({params}) {
    const {id} = await params;
    const response = await fetch(`http://localhost:3000/api/service/${id}`);
    const service = await response.json();
 
  return (
    <div>
      <CheckOutForm service={service} />
    </div>
  )
}
