import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image src="/images/404.webp" alt="404 Not Found" width={400} height={400} />
    </div>
  );
};

export default NotFound;
