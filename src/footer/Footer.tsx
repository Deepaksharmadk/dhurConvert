import { Button, Text } from '@mantine/core'
import React from 'react'

export function Footer() {
    return (
        <div className='grid gap-4 m-4 sm:grid-cols-1 '>
            <div>
                <footer>
                    <Button style={{ cursor: "not-allowed" }} c="black" justify="center" fullWidth color="yellow"> © 2025 Dhur Converter App. All rights reserved.<Text >
                        Developed by Deepak Sharma.9525468293</Text></Button>
                </footer>
            </div>
        </div>
    )
}

export default Footer