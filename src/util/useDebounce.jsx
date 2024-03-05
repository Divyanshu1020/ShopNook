import React, { useEffect, useRef } from 'react'

export default function useDebounce(callback, delay = 200, dependencies) {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!isFirstRender.current) {
            const handler = setTimeout(() => {
                callback()
            }, delay);
      
            return () => {
              clearTimeout(handler);
            };
        } else {
            isFirstRender.current = false;
        }
    }, dependencies);
}
