import { useState, useEffect } from 'react';
// Коли ми створюємо свій хук ми повинні використати слово 'use'
export const useFetch = (url) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }
    // 'useEffect' буде запущений першому рендерінгу сторінки та коли 'url' буде змінено
    useEffect(() => {
        getProducts()
    }, [url])
    
    return {loading, products}
};

