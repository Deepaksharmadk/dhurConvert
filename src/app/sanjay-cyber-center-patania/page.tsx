// app/sanjay-cyber-center-patania/page.tsx
import { redirect } from "next/navigation";
export const metadata = {
    title: "Sanjay Cyber Center Patania - Deepak Sharma",
    description:
        "Sanjay Cyber Center Patania की official वेबसाइट, जहां आप online services और Dhur Converter tool पा सकते हैं।",
    keywords: [
        "Sanjay Cyber Center Patania",
        "Deepak Sharma",
        "Cyber Cafe Patania",
        "Dhur Converter"
    ],
};

export default function SanjayCyberCenterPage() {
    redirect("/");
    return (
        <main>
           <h2>Deepak Cyber Center Patania</h2>
        </main>
    );
}
