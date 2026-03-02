import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    SITE_URL,
    SITE_NAME,
    SITE_DESCRIPTION,
    CONTACT_EMAIL,
} from "@/lib/constants";

export const metadata: Metadata = {
    title: `${SITE_NAME} — High-Stakes Software, Delivered`,
    description: SITE_DESCRIPTION,
};

export default function HomePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        foundingDate: "2026",
        contactPoint: {
            "@type": "ContactPoint",
            email: CONTACT_EMAIL,
            contactType: "sales",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-3xl">
                    <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        For the scary stuff,
                        <br />
                        call Peculiar.
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
                        Board-visible launches. AI-accelerated codebases nobody
                        trusts in production. One team designs, builds, and
                        operates it &mdash; so the bet lands, not explodes.
                    </p>
                    <p className="text-base text-muted-foreground/80 max-w-2xl mb-8">
                        One team runs what it ships. Buy outcomes, not hours. Move
                        a metric every week.
                    </p>
                    <Button asChild size="lg">
                        <a href="#contact">
                            Get in Touch
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t" />

            {/* The Problem */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl mb-12">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Sound Familiar?
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            AI Velocity, Production Fragility
                        </h3>
                        <p className="text-muted-foreground">
                            Your team ships faster with AI-generated code, but
                            72% of organizations report production incidents
                            traced back to it. Speed without reliability is
                            technical debt on a deadline.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Vendor Fragmentation
                        </h3>
                        <p className="text-muted-foreground">
                            Different agency for design, different contractors
                            for build, nobody for operations. You became the
                            integration layer &mdash; and the single point of
                            failure.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Board Pressure, Engineering Reality
                        </h3>
                        <p className="text-muted-foreground">
                            The board approved budget and expects results by Q3.
                            &ldquo;AI makes everything cheaper&rdquo;
                            doesn&rsquo;t match the engineering reality of
                            production-grade systems.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Build Teams That Walk Away
                        </h3>
                        <p className="text-muted-foreground">
                            The agency delivered and left. The contractors moved
                            on. Your internal team inherited a system nobody
                            fully understands &mdash; and it&rsquo;s now in
                            production.
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t" />

            {/* D-B-O */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl mb-12">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Design-Build-Operate (D-B-O)
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        One team takes your platform from ambiguous prototype to
                        production-grade system &mdash; and stays until impact is
                        proven.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-mono text-sm font-bold">
                                D
                            </span>
                            <h3 className="font-mono text-xl font-semibold">Design</h3>
                        </div>
                        <p className="text-muted-foreground pl-11">
                            Validate assumptions with evidence, architect for
                            production constraints, and deliver a clear decision
                            within weeks &mdash; not months.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-mono text-sm font-bold">
                                B
                            </span>
                            <h3 className="font-mono text-xl font-semibold">Build</h3>
                        </div>
                        <p className="text-muted-foreground pl-11">
                            AI-augmented, human-verified. Every PR reviewed by
                            engineers who understand your business constraints.
                            Measurable progress weekly.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-mono text-sm font-bold">
                                O
                            </span>
                            <h3 className="font-mono text-xl font-semibold">Operate</h3>
                        </div>
                        <p className="text-muted-foreground pl-11">
                            When AI-generated code surfaces a production issue at
                            2am, the people who wrote it are the ones fixing it.
                            SLOs, monitoring, incident response &mdash; included.
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t" />

            {/* Discovery Sprint */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Prove It in 2&ndash;4 Weeks
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        You&rsquo;ve committed six figures to a vendor before and
                        gotten a slide deck. Our discovery sprint delivers
                        running code and an honest recommendation &mdash; before
                        the full engagement.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6 text-sm">
                        <div className="space-y-1">
                            <p className="font-mono font-semibold text-foreground">
                                Working vertical slice
                            </p>
                            <p className="text-muted-foreground">
                                Running code in a production-like environment,
                                not a prototype in a sandbox.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-mono font-semibold text-foreground">
                                Validated architecture
                            </p>
                            <p className="text-muted-foreground">
                                What works, what needs rearchitecting, what
                                should be killed &mdash; with evidence.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-mono font-semibold text-foreground">
                                Honest recommendation
                            </p>
                            <p className="text-muted-foreground">
                                Commit, pivot, or walk away. We&rsquo;ll tell
                                you to stop if stopping is the right call.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t" />

            {/* Why Peculiar */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl mb-12">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Why Peculiar
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        You&rsquo;ve worked with agencies before. Senior team on
                        the pitch, junior team on the work. We do it
                        differently.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            AI-Augmented, Human-Verified
                        </h3>
                        <p className="text-muted-foreground">
                            Pods of 2&ndash;5 experienced engineers. AI handles
                            the toil, humans handle the judgment. No juniors
                            learning on your dime, no unreviewed AI output in
                            your production.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            R&D-Forged
                        </h3>
                        <p className="text-muted-foreground">
                            Payments, identity, billing, marketplaces, data
                            pipelines. A production failure in these systems
                            isn&rsquo;t a bug ticket &mdash; it&rsquo;s a board
                            conversation. We know the difference.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Run What You Ship
                        </h3>
                        <p className="text-muted-foreground">
                            No handoff to a different ops team. The people who
                            understand the system are the ones responding to
                            incidents &mdash; including the AI-generated parts.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Outcomes, Not Hours
                        </h3>
                        <p className="text-muted-foreground">
                            You&rsquo;re buying production outcomes, not typing
                            speed. Premium retainers anchored to impact
                            milestones. Weekly demos showing a metric moved.
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t" />

            {/* Contact */}
            <section
                id="contact"
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
            >
                <div className="max-w-2xl">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Tell Us About Your Mission
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        We take on a handful of engagements at a time. If
                        it&rsquo;s the kind of high-stakes problem we&rsquo;re
                        built for, we&rsquo;ll schedule a discovery call. If
                        not, we&rsquo;ll tell you that too. No sales process.
                        An engineer answers.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button asChild size="lg">
                            <a href={`mailto:${CONTACT_EMAIL}`}>
                                {CONTACT_EMAIL}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <a
                                href="https://www.linkedin.com/company/peculiar-agency"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
