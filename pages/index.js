import { Carousel } from '../components/Carousel';
import { itensArr } from '../mocks/carousel';
import { About } from '../views/Home/About';
import { Hero } from '../views/Home/Hero';
import { HomeProjects } from '../views/Home/Projects';
export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Carousel items={itensArr} />
			<HomeProjects />
		</>
	);
}
