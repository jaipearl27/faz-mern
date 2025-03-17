import AdminNavbar from "@/components/AdminComponents/AdminNavbar";


export default function AdminLayout({children}){
    return (
        <div>
            <AdminNavbar />
            <main>{children}</main>
        </div>
    )
}