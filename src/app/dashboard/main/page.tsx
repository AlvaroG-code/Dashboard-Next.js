import { WidgetsGrid } from "@/components/WidgetsGrid";

export const metadata = {
    title: "Darhboard",
    description: "Dashboard de la aplicación",
};

export default function MainPage() {
    return (
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-3xl">Información General</span>

            <WidgetsGrid />
        </div>
    );
}
