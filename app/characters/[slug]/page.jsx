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
import Image from "next/image";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const { characters } = await getAllCharacters();
  return characters.map((character) => ({ slug: character.slug }));
};

const Page = async ({ params }) => {
  const { character, character_quotes } = await getCharacterBySlug(params.slug);
  const res = await getCharacterBySlug(params.slug);
  console.log(res);
  return (
    <Container className="flex flex-col gap-5 py-5" as="main">
      <div>
        <h1>{character.name}</h1>
        <ul>
          {character.occupations.map((occupation) => {
            return <li key={occupation}>{occupation}</li>;
          })}
        </ul>
      </div>

      <p>{character.description}</p>

      <ul>
        {character.images.map((image) => {
          return (
            <li key={image}>
              <Image src={image} width={760} height={435} />
            </li>
          );
        })}
      </ul>

      {character.skills && (
        <>
          <h2>Power And Skills</h2>
          <ul>
            {character.skills.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </>
      )}

      {character_quotes && (
        <>
          <h2>Famous Quotes</h2>
          <ul>
            {character_quotes.map((item) => {
              return <li key={item.quote}>{item.quote}</li>;
            })}
          </ul>
        </>
      )}
    </Container>
  );
};

export default Page;
