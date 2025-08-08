"use client"
import { Button, Input, Tabs, Text, } from "@mantine/core";
import { EqualApproximately } from "lucide-react";
import { useState } from "react";

export default function Home() {
    // 💡 States to manage input और result values
    const [dhurValue, setDhurValue] = useState<string>("")
    const [decimalValue, setDecimalValue] = useState<string>("")
    const [dhurResult, setDhurResult] = useState<string>("")
    const [decimalResult, setDecimalResult] = useState<string>("")
    const [roundedDecimal, setRoundedDecimal] = useState<string>("")
    const [roundedDhur, setRoundedDhur] = useState<string>("")
    const [kataFromDhur, setKataFromDhur] = useState<string>("") // ✅ Dhur → Katha
    const [kataFromDecimal, setKataFromDecimal] = useState<string>("") // ✅ Decimal → Dhur → Kath

    function formatKathaDhurFromDhur(dhurValue: number) {
        const katha = Math.floor(dhurValue / 20); // 1 कट्ठा = 20 धुर
        const remainingDhur = Math.round((dhurValue % 20) * 10) / 10; // दशमलव को भी संभालेगा

        return `${katha} कट्ठा ${remainingDhur > 0 ? ` ${remainingDhur} धुर` : ""}`;
    }








    // ✅ Function: Dhur से Decimal में बदलना
    // ✅ Dhur ➝ Decimal
    const convertDhurToDecimal = (value: string,) => {
        if (!value || isNaN(Number(value))) {
            setDecimalResult("कृपया एक मान्य संख्या दर्ज करें")
            setRoundedDecimal("")
            return
        }
        const result = (12 / 55) * Number(value)
        setDecimalResult(result.toFixed(4))              // 4-digit decimal
        if (result < 1) {
            setRoundedDecimal(result.toFixed(4))
        } else {
            setRoundedDecimal(String(Math.round(result)))
        }    // 🔁 Rounded result
        // ✅ Dhur → Katha (formatted)
        // const kataValue = Number(value) / 20
        setKataFromDhur(formatKathaDhurFromDhur(Number(value)));

    }

    // ✅ Decimal ➝ Dhur
    const convertDecimalToDhur = (value: string) => {
        if (!value || isNaN(Number(value))) {
            setDhurResult("कृपया एक मान्य संख्या दर्ज करें")
            setRoundedDhur("")
            return
        }
        const result = Number(value) / (12 / 55)
        setDhurResult(result.toFixed(4))              // 4-digit decimal
        // setRoundedDhur(String(Math.round(result)))    // 🔁 Rounded result
        // ✅ अगर 0 से शुरू है तो वैसा ही दिखाएं
        if (result < 1) {
            setRoundedDhur(result.toFixed(4))
        } else {
            setRoundedDhur(String(Math.round(result)))
        }
        // const kataValue = result / 20
        setKataFromDecimal(formatKathaDhurFromDhur(result))

    }


    // 🔁 Auto Convert: Dhur input बदलते ही result दिखाएं
    const handleDhurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setDhurValue(value)
        convertDhurToDecimal(value)
    }

    // 🔁 Auto Convert: Decimal input बदलते ही result दिखाएं
    const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setDecimalValue(value)
        convertDecimalToDhur(value)
    }

    // ⌨️ Enter दबाने पर Dhur से Decimal में रूपांतरण
    const handleDhurKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            convertDhurToDecimal(dhurValue)
        }
    }

    // ⌨️ Enter दबाने पर Decimal से Dhur में रूपांतरण
    const handleDecimalKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            convertDecimalToDhur(decimalValue)
        }
    }

    // 🔽 UI Start
    return (
        <div className="grid gap-4 m-4 sm:grid-cols-1 min-h-[600px] ">
            <div className=" sm:m-4 m-2">
                {/* 🧭 Tabs for conversion direction */}
                <Tabs color="teal" variant="pills" defaultValue="decimaltodhur">
                    <Tabs.List grow>

                        <Tabs.Tab value="decimaltodhur">Decimal to Dhur / डेसिमल से धुर में</Tabs.Tab>
                        <Tabs.Tab value="dhurtodecimal">Dhur to Decimal / धुर से डेसिमल में</Tabs.Tab>
                    </Tabs.List>

                    {/* ----------------------- DHUR TO DECIMAL ------------------------ */}
                    <Tabs.Panel value="dhurtodecimal">
                        {/* 🔢 Input: Dhur value */}
                        <div className="mt-4">
                            <Input
                                id="dhur-input"
                                type="number"
                                placeholder="Enter value in Dhur / धुर में मान दर्ज करें"
                                value={dhurValue}
                                onChange={handleDhurChange}       // 🔁 Auto convert
                                onKeyDown={handleDhurKeyDown}     // ⌨️ Enter key
                            />
                        </div>

                        {/* 🖱️ Manual Convert Button */}
                        <Button mt="md" fullWidth onClick={() => convertDhurToDecimal(dhurValue)}>
                            Convert / रूपांतरण करें
                        </Button>

                        {/* 📊 Result Display */}
                        {dhurValue.length > 0 && decimalResult.length > 0 && (
                            <div className="mt-4 p-3 bg-gray-100 rounded-md">
                                <Text c="red" fw={700}>
                                    Result (Decimal) / परिणाम (डेसिमल) = <Text size="xl" fw={600} span c="green">{decimalResult} <EqualApproximately className="inline" color="red" strokeWidth={3} size={25} /> {roundedDecimal} डेसिमल</Text>
                                </Text>
                                <Text c="red" fw={700}>
                                    Result कट्ठा  = <Text size="xl" fw={600} span c="green">{kataFromDhur}</Text>
                                </Text>

                            </div>
                        )}
                    </Tabs.Panel>

                    {/* ----------------------- DECIMAL TO DHUR ------------------------ */}
                    <Tabs.Panel value="decimaltodhur">
                        {/* 🔢 Input: Decimal value */}
                        <div className="mt-4">
                            <Input
                                id="decimal-input"
                                type="number"
                                placeholder="Enter value in Decimal / डेसिमल में मान दर्ज करें"
                                value={decimalValue}
                                onChange={handleDecimalChange}      // 🔁 Auto convert
                                onKeyDown={handleDecimalKeyDown}   // ⌨️ Enter key
                            />
                        </div>

                        {/* 🖱️ Manual Convert Button */}
                        <Button mt="md" fullWidth onClick={() => convertDecimalToDhur(decimalValue)}>
                            Convert / रूपांतरण करें
                        </Button>

                        {/* 📊 Result Display */}
                        {decimalValue.length > 0 && dhurResult.length > 0 && (
                            <div className="mt-4 p-3 bg-gray-100 rounded-md">
                                <Text c="red" fw={700}>
                                    Result (Dhur) / परिणाम (धुर)  = <Text size="xl" fw={600} span c="green">{dhurResult} <EqualApproximately className="inline" color="red" strokeWidth={3} size={25} /> {roundedDhur} धुर</Text>
                                </Text>
                                <Text c="red" fw={700}>
                                    Result कट्ठा  = <Text size="xl" fw={600} span c="green">{kataFromDecimal}</Text>
                                </Text>


                            </div>
                        )}

                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}
