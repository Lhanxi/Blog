import Card from "@/components/card/Card";

async function getMessage() {
  const res = await fetch("http://localhost:8080/api/user-input", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.message;
}

export const metadata = {
  title: 'Blog',
};

export default async function Page() {
  const message = await getMessage();

  return (
    <div className="container">
      <h1 className="title">The Life of a NUS Information Systems Student</h1>
      <div className="cardContainer">
        <Card
          title="Year 1 Semester 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem1.jpg"
        />
        <Card
          title="Year 1 Semester 2"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem2.jpg"
        />
        <Card
          title="Year 2 Semester 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem1.jpg"
        />
        <Card
          title="Year 2 Semester 2"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem2.jpg"
        />
      </div>
    </div>
  );
}