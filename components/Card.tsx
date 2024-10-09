import Image from "next/image";
interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: CardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          className="absolute inset-0 transition-transform duration-200 ease-in-out hover:scale-110"
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
