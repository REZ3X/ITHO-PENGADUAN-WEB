import {Html, Head, Main, NextScript} from "next/document";
import CustomHead from "../components/head";

export default function Document() {
    return (
        <Html lang="en">
            <Head><CustomHead/></Head>
            <body className="antialiased">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
        ;
}
