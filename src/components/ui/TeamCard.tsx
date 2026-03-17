/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/ui/TeamCard.tsx
 *
 * Description:
 * Team member card with circular photo treatment.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
type TeamCardProps = {
  name: string
  image: string
}

export function TeamCard({ name, image }: TeamCardProps) {
  return (
    <article className="text-center">
      <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border border-brown-dark/10 bg-white shadow-card sm:h-48 sm:w-48">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <p className="mt-5 font-serif text-2xl text-brown-dark">{name}</p>
    </article>
  )
}
