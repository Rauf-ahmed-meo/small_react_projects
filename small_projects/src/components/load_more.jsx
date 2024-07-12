import { useState, useEffect } from 'react';
import React from 'react';

const LoadMore = () => {
    const [data, setData] = useState({ products: [] });
    const [loading, setLoading] = useState(true);
    const [limit, setlimit] = useState(0)

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${limit}&select=title,price`);
            const result = await response.json();
            if (result) {
                setLoading(false);
                setData(result);
            }
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    };

    useEffect(() => {
        getData();
    }, [limit]);

    return (
        <div>
            <h1 style={{textAlign:"center"}}>LOAD MORE</h1>
        <div className='products_container'>
            {
                loading === false && (
                    data.products && data.products.map((item) => {
                        return <div key={item.id}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR905Tkp8MLUa9Z-kQ04XPNeODOHIM2WNJPIQ&s" className='product_image' alt="image of product1" />
                            <div>{item.title}</div>
                            <div className="price">{item.id + "$"}</div>
                        </div>
                    })
                )
            }
            <button onClick={() => setlimit(limit + 10)} style={{height:"77px"}}>load more</button>
        </div>
        </div>
    );
};

export default LoadMore;
