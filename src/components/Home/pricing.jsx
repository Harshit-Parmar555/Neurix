// components import
import { Wrapper } from "../globals/wrapper";
import { Container } from "../globals/container";
import SectionBadge from "../ui/section_badge";
import PlanCard from "../ui/price_card";

// constants import
import { plans } from "@/constants";

export default function Pricing() {
  return (
    <Wrapper>
      <Container>
        <div className="max-w-md text-start md:mx-auto md:text-center">
          <SectionBadge title="Pricing" />
          <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
            Flexible Pricing for Every Developer
          </h2>
          <p className="mt-6 text-muted-foreground font-jetbrains-mono text-sm text-zinc-400">
            Find the perfect plan for your needs and unlock powerful AI coding
            features today.
          </p>
        </div>
      </Container>
      <Container>
        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} {...plan} />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}
