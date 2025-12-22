"use client";
import { Typewriter } from "react-simple-typewriter";

export function TypewriterText({
    text
}: {
    text: string[];
}) {
    return (
        <Typewriter
            words={text}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
    );
}
