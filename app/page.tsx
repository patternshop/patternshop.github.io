import Image from "next/image";
import MyNavbar from "./my_navbar";
export default function Home() {
  return (
    <main className="container max-w-3xl mx-auto rounded-md border-solid border-2 border-gray-200 m-5 p-5 bg-white">
      <MyNavbar />
      <h1 className="text-blue-500">I'm blue!</h1>
    </main>
  );
}
