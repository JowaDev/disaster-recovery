import {MutableRefObject, useEffect} from "react";
import Reveal from "reveal.js";

export const useSlide = (deckRef: MutableRefObject<Reveal.Api | null>, deckDivRef: MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, {
            transition: "slide",
        });

        deckRef.current.initialize().then(() => {
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy call failed.");
            }
        };
    }, []);
}