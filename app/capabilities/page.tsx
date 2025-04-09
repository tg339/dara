import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function CapabilitiesCatalog() {
  // Categories
  enum Categories {
    ContinuousImprovement = "Continuous Improvement",
    Velocity = "High Velocity",
    FastFeedback = "Fast Feedback",
  }

  enum CapabilityType {
    DORAOriginal = "DORA Original",
    DORADerived = "DORA derived",
    DARAOriginal = "DARA Specific",
  }

  // Sample capabilities data
  const capabilities = [
    {
      id: 1,
      name: "Code Maintainability",
      href: "/capabilities/code-maintainability",
      category: Categories.ContinuousImprovement,
      description:
        "Make it easy for developer to find, reuse, refactor, and maintain data pipelines, models and features code.",
      status: "In Progress",
      type: CapabilityType.DORADerived,
    },
    {
      id: 2,
      name: "Documentation Quality",
      category: Categories.ContinuousImprovement,
      href: "/capabilities/documentation-quality",
      description:
        "Maintain high quality internal documentation for all pipelines, models, features, governance policies to empower developers and other stakeholders.",
      status: "Coming Soon",
      type: "DORA derived",
    },
    {
      id: 3,
      name: "Empower teams to choose tools",
      category: Categories.ContinuousImprovement,
      href: "/capabilities/empower-teams-to-choose-tools",
      description:
        "Empower teams to make deliberate, well informed and value maximizing tooling choices.",
      status: "Planned",
      type: "DORA derived",
    },
    {
      id: 4,
      name: "Generative organizational culture",
      category: Categories.ContinuousImprovement,
      href: "https://dora.dev/capabilities/generative-organizational-culture/",
      description:
        "Discover how growing a generative, high-trust culture drives better organizational and software delivery performance.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 5,
      name: "Job Satisfaction",
      href: "https://dora.dev/capabilities/generative-organizational-culture/",
      category: Categories.ContinuousImprovement,
      description:
        "Discover how growing a generative, high-trust culture drives better organizational and software delivery performance.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 6,
      name: "Learning culture",
      href: "/capabilities/learning-culture",
      category: Categories.ContinuousImprovement,
      description:
        "Discover how growing a generative, high-trust culture drives better organizational and software delivery performance.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    // --- Added DORA Capabilities ---
    // Climate for Learning / Continuous Improvement
    {
      id: 7,
      name: "Team experimentation",
      href: "/capabilities/team-experimentation",
      category: Categories.ContinuousImprovement,
      description:
        "Innovate faster by building empowered teams that can try out new ideas without approval from people outside the team.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 8,
      name: "Transformational leadership",
      href: "https://dora.dev/capabilities/transformational-leadership/",
      category: Categories.ContinuousImprovement,
      description:
        "Learn how effective leaders influence software delivery performance by driving the adoption of technical and product management capabilities.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 9,
      name: "Well-being",
      href: "https://dora.dev/capabilities/well-being/",
      category: Categories.ContinuousImprovement,
      description:
        "A focus on employee happiness and work environment can improve organizational performance while helping retain talent.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    // Fast Flow / Velocity
    {
      id: 10,
      name: "Continuous delivery",
      href: "/capabilities/continuous-delivery",
      category: Categories.Velocity,
      description:
        "Make deploying software a reliable, low-risk process that can be performed on demand at any time.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 11,
      name: "Database change management",
      href: "/capabilities/database-change-management",
      category: Categories.Velocity,
      description:
        "Make sure database changes don't cause problems or slow you down.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 12,
      name: "Deployment automation",
      href: "/capabilities/deployment-automation",
      category: Categories.Velocity,
      description:
        "Best practices and approaches for deployment automation and reducing manual intervention in the release process.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 13,
      name: "Flexible infrastructure",
      href: "/capabilities/flexible-infrastructure",
      category: Categories.Velocity,
      description:
        "Find out how to manage cloud infrastructure effectively so you can achieve higher levels of agility, availability, and cost visibility.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 14,
      name: "Loosely coupled teams",
      href: "https://dora.dev/capabilities/loosely-coupled-teams/",
      category: Categories.Velocity,
      description:
        "Learn about moving from a tightly coupled architecture to service-oriented and microservice architectures without re-architecting everything at once",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 15,
      name: "Streamlining change approval",
      href: "/capabilities/streamlining-change-approval",
      category: Categories.Velocity,
      description:
        "Replace heavyweight change-approval processes with peer review, to get the benefits of a more reliable, compliant release process without sacrificing speed.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 16,
      name: "Trunk-based development",
      href: "https://dora.dev/capabilities/trunk-based-development/",
      category: Categories.Velocity,
      description:
        "Prevent merge-conflict hassles with trunk-based development practices.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 17,
      name: "Version control",
      href: "/capabilities/version-control",
      category: Categories.Velocity,
      description:
        "A guide to implementing the right version control practices for reproducibility and traceability.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 18,
      name: "Visual management",
      href: "https://dora.dev/capabilities/visual-management/",
      category: Categories.Velocity,
      description:
        "Learn about the principles of visual management to promote information sharing, get a common understanding of where the team is, and how to improve.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 19,
      name: "Work in process limits",
      href: "https://dora.dev/capabilities/work-in-process-limits/",
      category: Categories.Velocity,
      description:
        "Prioritize work, limit the amount of things that people are working on, and focus on getting a small number of high-priority tasks done.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 20,
      name: "Working in small batches",
      href: "/capabilities/working-in-small-batches",
      category: Categories.Velocity,
      description:
        "Create shorter lead times and faster feedback loops by working in small batches. Learn common obstacles to this critical capability and how to overcome them.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    // Fast Feedback
    {
      id: 21,
      name: "Continuous integration",
      href: "/capabilities/continuous-integration",
      category: Categories.FastFeedback,
      description:
        "Learn about common mistakes, ways to measure, and how to improve on your continuous integration efforts.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 22,
      name: "Customer feedback",
      href: "https://dora.dev/capabilities/customer-feedback/",
      category: Categories.FastFeedback,
      description:
        "Drive better organizational outcomes by gathering customer feedback and incorporating it into product and feature design.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 23,
      name: "Monitoring and observability",
      href: "/capabilities/monitoring-and-observability",
      category: Categories.FastFeedback,
      description:
        "Learn how to build tooling to help you understand and debug your production systems.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 24,
      name: "Monitoring systems to inform business decisions",
      href: "https://dora.dev/capabilities/monitoring-systems/",
      category: Categories.FastFeedback,
      description:
        "Improve monitoring across infrastructure platforms, middleware, and the application tier, so you can provide fast feedback to developers.",
      status: "Coming Soon",
      type: CapabilityType.DORAOriginal,
    },
    {
      id: 25,
      name: "Pervasive security",
      href: "/capabilities/pervasive-security",
      category: Categories.FastFeedback,
      description:
        "Build security into the software development lifecycle without compromising delivery speed.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 26,
      name: "Proactive failure notification",
      href: "/capabilities/proactive-failure-notification",
      category: Categories.FastFeedback,
      description:
        "Set proactive failure notifications to identify critical issues and act on problems before they arise.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 27,
      name: "Test automation",
      href: "/capabilities/test-automation",
      category: Categories.FastFeedback,
      description:
        "Improve software quality by building reliable automated test suites and performing all kinds of testing throughout the software delivery lifecycle.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 28,
      name: "Test data management",
      href: "/capabilities/test-data-management",
      category: Categories.FastFeedback,
      description:
        "Understand the right strategies for managing test data effectively along with approaches to provide fast, secure data access for testing.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    {
      id: 29,
      name: "Visibility of work in the value stream",
      href: "/capabilities/visibility-of-work-in-the-value-stream",
      category: Categories.FastFeedback,
      description:
        "Understand and visualize the flow of work from idea to customer outcome in order to drive higher performance.",
      status: "Coming Soon",
      type: CapabilityType.DORADerived,
    },
    // --- End of Added DORA Capabilities ---
  ];

  return (
    <main className="max-w-(--nextra-content-width) pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] mx-auto py-8">
      <h1>Capabilities Catalog</h1>
      <p>
        Explore the various capabilities and features available in the DARA
        Research and Assessments
      </p>

      <div>
        <h2>{Categories.ContinuousImprovement}</h2>
        <p>
          The following capabilities are meant to help drive a culture of
          learning and continuous improvemnet which is critical to the continued
          success of teams.
        </p>
        <Separator />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities
          .filter((c) => c.category === Categories.ContinuousImprovement)
          .map((capability) => (
            <Link href={capability.href} key={capability.id}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{capability.name}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
                <CardContent className="grow" />
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Learn More
                    {/* Right arrow for internal links, up right arrow for external links */}
                    {capability.type === CapabilityType.DORAOriginal ? (
                      <ArrowUpRightIcon className="w-4 h-4" />
                    ) : (
                      <ArrowRightIcon className="w-4 h-4" />
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>

      <div>
        <h2>About the Catalog</h2>
        <p>
          This catalog showcases the various capabilities and features that Dara
          offers to help improve your development workflow. Each capability is
          designed to address specific challenges in software development and
          provide actionable insights.
        </p>
      </div>
    </main>
  );
}
