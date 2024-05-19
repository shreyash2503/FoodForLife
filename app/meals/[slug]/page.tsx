export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <main>
      <h1>This is the dynamic route for {params.slug}</h1>
    </main>
  );
}
