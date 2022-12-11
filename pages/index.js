import { Carousel } from '../components/Carousel';
import { FadeWrapper } from '../components/FadeWrapper';
import { itensArr } from '../mocks/carousel';
import { About } from '../views/Home/About';
import { Hero } from '../views/Home/Hero';
import { HomeProjects } from '../views/Home/Projects';
export default function Home() {
	return (
		<>
			<Hero />
			<FadeWrapper>
				<About />
			</FadeWrapper>
			<FadeWrapper>
				<Carousel items={itensArr} />
			</FadeWrapper>
			<FadeWrapper>
				<HomeProjects />
			</FadeWrapper>
		</>
	);
}
