export const dynamic = "force-static";

export async function GET() {
  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Health" },
    { id: 3, name: "Science" },
    { id: 4, name: "Art" },
    { id: 5, name: "Travel" },
  ];
  return Response.json(categories);
}
