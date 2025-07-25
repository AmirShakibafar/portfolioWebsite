import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SocialLinks from "@/components/SocialLinks";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <main>{children}</main>
      <FooterSection data-theme="dark" />
    </>
  );
}
