import { useEffect, useState } from "react"

export const useDebounce = (text, delay ) => {
    const [debouncedText, setDebouncedText] = useState(text);
    useEffect(() => {
      const handler =  setTimeout(() => {
            setDebouncedText(text)
        }, delay)
        return () => {
            clearInterval(handler)
        }
    }, [text, delay])
    return debouncedText;
}