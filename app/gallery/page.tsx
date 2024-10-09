import Card from "@/components/Card";

const cardsData = [
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 1",
    description: "This is the description for card 1.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 2",
    description: "This is the description for card 2.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 3",
    description: "This is the description for card 3.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 4",
    description: "This is the description for card 4.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 5",
    description: "This is the description for card 5.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 6",
    description: "This is the description for card 6.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 7",
    description: "This is the description for card 7.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 8",
    description: "This is the description for card 8.",
  },
  {
    image: "https://via.placeholder.com/400",
    title: "Card Title 9",
    description: "This is the description for card 9.",
  },
];

export default function GalleryPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
