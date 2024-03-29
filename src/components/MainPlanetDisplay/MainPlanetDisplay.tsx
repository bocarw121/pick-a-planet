import { PlanetImage } from './PlanetImage';
import { PlanetLink } from './PlanetLink';
import { mainPlanets } from '@/constants/planets';
import { PlanetText } from './PlanetText';

interface MainPlanetDisplayProps {}

export function MainPlanetDisplay({}: MainPlanetDisplayProps) {
  return (
    <main className="grid grid-cols-main gap-20 mt-20 mx-auto p-main-horizontal-spacing max-sm:gap-12 ">
      {mainPlanets.map((planet) => (
        <div
          key={planet.name}
          className="border-2 rounded-xl h-96 max-sm:w-[100%]  border-white  items-center justify-evenly flex flex-col"
        >
          <PlanetText planet={planet.name} />
          <PlanetImage source={planet.image} planet={planet.name} />
          <PlanetLink path={planet.path} />
        </div>
      ))}
    </main>
  );
}
