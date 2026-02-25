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
                        We design, build, and operate high-stakes software for
                        exec-backed special missions and scale-ups &mdash; so bold
                        bets deliver impact, not drama.
                    </p>
                    <p className="text-base text-muted-foreground/80 max-w-2xl mb-8">
                        One pod runs what it ships. Buy outcomes, not hours. Move
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

            {/* D-B-O */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl mb-12">
                    <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Design-Build-Operate (D-B-O)
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        One pod from discovery through production. No handoff, no
                        seams, no &ldquo;that&rsquo;s not my job.&rdquo;
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
                            Map the problem space, validate assumptions with
                            evidence, and architect systems that survive contact
                            with production.
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
                            Senior engineers ship production code weekly. Small
                            pod, tight feedback loops, measurable progress
                            against the metric that matters.
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
                            The pod that builds it runs it. SLOs, monitoring,
                            incident response &mdash; we stay until impact is
                            proven.
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
                        Start With a Discovery Sprint
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        A bounded 2&ndash;4 week experiment before the full
                        commitment. One pod, real code, evidence-based go/no-go.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6 text-sm">
                        <div className="space-y-1">
                            <p className="font-mono font-semibold text-foreground">
                                Working vertical slice
                            </p>
                            <p className="text-muted-foreground">
                                Running code in a production-like environment,
                                not a slide deck.
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
                                Commit, pivot, or walk away. Early no-go is
                                still impact.
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
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Senior-Only Pods
                        </h3>
                        <p className="text-muted-foreground">
                            Pods of 2&ndash;5, every member senior. No bench, no
                            juniors learning on your dime. First production value
                            in ~2 weeks.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            R&D-Forged
                        </h3>
                        <p className="text-muted-foreground">
                            Payments, identity, billing, marketplaces, data
                            pipelines &mdash; transaction-critical platforms are
                            our domain. The scary stuff.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Run What You Ship
                        </h3>
                        <p className="text-muted-foreground">
                            No handoff to a different pod. The people who
                            designed and built the system operate it, monitor it,
                            and fix it at 2am.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-mono text-lg font-semibold">
                            Outcomes, Not Hours
                        </h3>
                        <p className="text-muted-foreground">
                            Premium retainers anchored to impact milestones.
                            Weekly demos showing a metric moved. If it does not
                            deliver value, we stop.
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
                        If it&rsquo;s the kind of high-stakes problem we&rsquo;re
                        built for, we&rsquo;ll schedule a discovery call. If
                        not, we&rsquo;ll tell you that too.
                    </p>
                    <Button asChild size="lg">
                        <a href={`mailto:${CONTACT_EMAIL}`}>
                            {CONTACT_EMAIL}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </section>
        </>
    );
}
