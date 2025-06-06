// comonents import
import { Wrapper } from "../globals/wrapper";
import { Container } from "../globals/container";
import SectionBadge from "../ui/section_badge";

// constants
import { perks } from "@/constants";

export default function Works() {
  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <Container>
        <div className="max-w-lg text-start md:mx-auto md:text-center">
          <SectionBadge title="The Process" />
          <div>
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              Supercharge Your Workflow in Just Three Steps
            </h2>
          </div>
          <p className="mt-6 text-muted-foreground font-jetbrains-mono text-sm text-zinc-400">
            Simple steps to unlock AI-assisted coding and faster development.
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex w-full flex-col items-center justify-center py-10 md:py-20">
          <div className="grid w-full grid-cols-1 divide-x-0 divide-y gap-4 divide-gray-900 first:border-gray-900 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3 lg:first:border-none">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="relative bg-zinc-950 border border-zinc-800 hover:border-purple-900 rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-lg  hover:shadow-purple-600/20 hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="flex items-center justify-center text-zinc-400">
                  <perk.icon className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white flex items-center gap-1">
                  {perk.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 font-jetbrains-mono text-left leading-relaxed">
                  {perk.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
