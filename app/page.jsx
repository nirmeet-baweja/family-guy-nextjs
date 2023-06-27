/**

Renders a Next.js page component that displays a grid of character avatars with links to individual character pages.
@component
@returns {JSX.Element} The rendered page component.
*/

import Link from "next/link";
import Image from "next/image";
import { endpoint } from "@/utils/endpoint";
import { Container } from "@/components";

const getAllCharacters = async () => {
  const data = await fetch(`${endpoint}/characters`);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
};

const Page = async () => {
  const data = await getAllCharacters();

  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.characters?.map((item) => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.name}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.avatar}
                alt=""
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                width={500}
                height={500}
              />
            </Link>
          );
        })}
      </Container>
    </main>
  );
};

export default Page;
