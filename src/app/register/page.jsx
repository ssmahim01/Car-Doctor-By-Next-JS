import Image from "next/image";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
    return (
        <>
          <h1 className="text-3xl font-bold text-center my-8">Register</h1>
          <section className="container mx-auto grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
              <Image
                className="hidden md:block"
                src={"/assets/images/login/login.svg"}
                width={460}
                height={500}
                alt="Authentication Image"
              />
            </div>
    
            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
              <RegisterForm />
            </div>
          </section>
        </>
      );
}
