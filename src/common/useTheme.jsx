import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme])

    return { theme, setTheme }
}

export default useTheme
