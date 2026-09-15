import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="sr-only">페이지를 찾을 수 없습니다</h1>
      <Image src="/images/404.webp" alt="" width={400} height={400} priority />
    </div>
  );
}
