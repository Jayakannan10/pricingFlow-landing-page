import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pricing Flow Blog – Pricing Strategy, SaaS Growth & Product Tips",
  description: "Explore the Pricing Flow blog for actionable insights on pricing strategy, SaaS growth, product marketing, and interactive pricing page tips. Stay ahead of the curve.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 