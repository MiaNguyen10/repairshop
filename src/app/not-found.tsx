import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          src="/images/not-found-1024x1024.png"
          alt="Page Not Found"
          width={300}
          height={300}
          className="m-0 rounded-xl"
          sizes="300px"
          priority={true}
          title="Page Not Found"
        />
      </div>
    </div>
  );
}
