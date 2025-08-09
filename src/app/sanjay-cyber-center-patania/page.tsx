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
            <h1>Sanjay Cyber Center Patania</h1>
            <p>
                <strong>Sanjay Cyber Center</strong> Patania गांव में स्थित है और इसे{" "}
                <strong>Deepak Sharma</strong> द्वारा चलाया जाता है। यहां आपको
                online services जैसे कि आधार कार्ड, पैन कार्ड, बिजली बिल, और
                जमीन मापने के लिए <strong>Dhur Converter Tool</strong> की सुविधा मिलती है।
            </p>
        </main>
    );
}
