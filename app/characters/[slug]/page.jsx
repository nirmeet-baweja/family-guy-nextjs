/**
Renders a Next.js page component that displays detailed information about a character, including their name, occupations, description, images, skills, and famous quotes.
@component
@param {Object} props - The component props.
@param {Object} props.params - The parameters passed to the page component.
@param {string} props.params.slug - The slug of the character.
@returns {JSX.Element} The rendered page component.
*/

import { getAllCharacters, getCharacterBySlug } from "@/lib/characters";
import { Container } from "@/components";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const { characters } = await getAllCharacters();
  return characters.map((character) => ({ slug: character.slug }));
};

const Page = async () => {
  return (
    <Container className="flex flex-col gap-5 py-5" as="main">
      Some info about Character.
    </Container>
  );
};

export default Page;
