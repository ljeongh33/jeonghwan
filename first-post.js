import Link from 'next/link';
import React from 'react';

export default function FirstPost() {
    return (
        <>
            <div>
                <h1>Cute Baby Penguins</h1>
                <img src="/images/C.jpg" alt="penguin" />
            </div>
            <h1>JeongHwan</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}
    