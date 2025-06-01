import Container from "@/components/Container";

export default function About() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-lg">
          Ivalt is a company that provides a platform for businesses to manage their
          customers and orders.
        </p>
      </div>
    </Container>
  );
}