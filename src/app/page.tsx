"use client"
import { Button, Input, Tabs, Text, Title } from "@mantine/core";
import { useState } from "react";

export default function Home() {
    // 💡 States to manage input और result values
    const [dhurValue, setDhurValue] = useState<string>("")
    const [decimalValue, setDecimalValue] = useState<string>("")
    const [dhurResult, setDhurResult] = useState<string>("")
    const [decimalResult, setDecimalResult] = useState<string>("")
    const [roundedDecimal, setRoundedDecimal] = useState<string>("")
    const [roundedDhur, setRoundedDhur] = useState<string>("")


    // ✅ Function: Dhur से Decimal में बदलना
    // ✅ Dhur ➝ Decimal
    const convertDhurToDecimal = (value: string) => {
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
                        <Tabs.Tab value="decimaltodhur">Dhur to Decimal / धुर से डेसिमल में</Tabs.Tab>
                        <Tabs.Tab value="dhurtodecimal">Decimal to Dhur / डेसिमल से धुर में</Tabs.Tab>
                    </Tabs.List>

                    {/* ----------------------- DHUR TO DECIMAL ------------------------ */}
                    <Tabs.Panel value="decimaltodhur">
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
                        {decimalResult.length > 0 && (
                            <div className="mt-4 p-3 bg-gray-100 rounded-md">
                                <Title c={"red"} order={4}>Result (Decimal) / परिणाम (डेसिमल):</Title>
                                <Text c="green" fw={700}>{decimalResult} डेसिमल</Text>
                                <Title order={5} mt="sm">Considered Result / अंतिम राउंडेड मान:</Title>
                                <Text c="green" fw={700}>{roundedDecimal} डेसिमल</Text>
                            </div>
                        )}
                    </Tabs.Panel>

                    {/* ----------------------- DECIMAL TO DHUR ------------------------ */}
                    <Tabs.Panel value="dhurtodecimal">
                        {/* 🔢 Input: Decimal value */}
                        <div className="mt-4">
                            <Input
                                id="decimal-input"
                                type="number"
                                placeholder="Enter value in Decimal / दशमलव में मान दर्ज करें"
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
                        {dhurResult.length > 0 && (
                            <div className="mt-4 p-3 bg-gray-100 rounded-md">
                                <Title c={"red"} order={3}>Result (Dhur) / परिणाम (धुर)</Title>
                                <Text c="green" fw={700}>{dhurResult} धुर</Text>
                                <Title order={4} mt="sm">Considered Result / अंतिम राउंडेड मान:</Title>
                                <Text c="green" fw={700}>{roundedDhur} धुर</Text>
                            </div>
                        )}
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}
