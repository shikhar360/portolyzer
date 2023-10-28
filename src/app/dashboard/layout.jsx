import Sidebar from "@/app/_component/Sidebar";

export default function DashboardLayout({
    children, 
  }) {
    return (
      <section>
        <Sidebar/>
        {children}
      </section>
    )
  }