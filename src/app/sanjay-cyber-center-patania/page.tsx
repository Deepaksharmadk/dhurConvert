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
    // Agar hamesha home pe redirect karna hai
    redirect("/");

    // Agar redirect nahi karna to neeche ka content dikhana
    return (
        <main>
            <h1>
                संजय साइबर सेंटर, पटनिया
                <br />
                <small>(Sanjay Cyber Center, Patania)</small>
            </h1>

            <p>
                यह वेबसाइट दीपक शर्मा द्वारा प्रबंधित की जाती है।
                <br />
                <small>(Yeh website Deepak Sharma dwara managed ki jaati hai.)</small>
            </p>

            <p>
                दीपक शर्मा
                <br />
                <small>(Deepak Sharma)</small>
            </p>
        </main>
    );
}
