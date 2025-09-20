import TechCard from "@/components/Card";

export default function TechSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
      <TechCard
        imgSrc="/images/Flutter.png"
        title="Flutter"
        bgColor="#2196f3"
      />
      <TechCard
        imgSrc="/images/Mern_Stack.png"
        title="MERN Stack"
        bgColor="#4caf50"
      />
      <TechCard
        imgSrc="/images/PHP_Laravel.png"
        title="PHP Laravel"
        bgColor="#f44336"
      />
    </div>
  );
}
