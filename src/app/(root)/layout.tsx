import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const revalidate = 5000;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
