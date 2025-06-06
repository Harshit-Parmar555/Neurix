// components import
import { Wrapper } from "../globals/wrapper";
import { Container } from "../globals/container";
import { UpperMarquee } from "../ui/marquee";
import SectionBadge from "../ui/section_badge";

// constants import
import { reviews } from "@/constants";

export default function Reviews() {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12 mt-24">
      <div className="absolute -left-1/3 -top-1/4 -z-10 hidden h-72 w-72 rounded-full bg-indigo-500 blur-[10rem] md:block"></div>
      <Container>
        <div className="mx-auto max-w-md text-start md:text-center">
          <SectionBadge title="Our Customers" />
          <div>
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              What people are saying
            </h2>
          </div>
          <p className="mt-6 text-muted-foreground font-jetbrains-mono text-sm text-zinc-400">
            See how WattX empowers people of all backgrounds. Here&apos;s what
            real people are saying
          </p>
        </div>
      </Container>
      <Container>
        <UpperMarquee reviews={reviews} />
      </Container>
    </Wrapper>
  );
}
