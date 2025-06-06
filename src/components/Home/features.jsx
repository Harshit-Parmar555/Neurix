// components import
import { Wrapper } from "../globals/wrapper";
import { Container } from "../globals/container";
import SectionBadge from "../ui/section_badge";

// constants
import { features } from "@/constants";

export default function Features() {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <div className="absolute -right-1/3 top-0 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[10rem] md:block"></div>
      <div className="absolute -left-1/3 bottom-0 -z-10 hidden h-72 w-72 rounded-full bg-indigo-600 blur-[10rem] md:block"></div>
      <Container>
        <div className="mx-auto max-w-lg text-start md:text-center">
          <SectionBadge title="Features" />
          <div>
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              Features That Elevate Every Line You Write
            </h2>
          </div>
          <p className="mt-6 text-muted-foreground font-jetbrains-mono text-sm text-zinc-400">
            Designed to save time and improve code quality with smart tools,
            clean UI, and intelligent automation.
          </p>
        </div>
      </Container>

      <Container>
        <div className="flex w-full flex-col items-center justify-center py-10 md:px-10 md:py-20">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start px-0 md:px-4 md:py-2 lg:items-start hover:border-[1px] hover:border-purple-900 transition-colors duration-300 ease-in-out rounded-lg"
              >
                <div className="flex items-center justify-center">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                <p className="mt-2 text-start text-muted-foreground font-jetbrains-mono text-zinc-400 text-xs lg:text-start">
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
