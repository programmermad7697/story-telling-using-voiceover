interface StorySectionProps {
  title: string;
  content: string;
}

export default function StorySection({ title, content }: StorySectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-lg">{content}</p>
    </section>
  );
}
