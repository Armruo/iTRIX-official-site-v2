import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

type LayoutProps = {
    hideFooter?: boolean;
    children: React.ReactNode;
};

const Layout = ({ hideFooter, children }: LayoutProps) => (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        {children}
        {hideFooter ? null : <Footer />}
    </div>
);

export default Layout;
