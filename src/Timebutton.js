import React, {useState} from 'react';

const TimeButton =  () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5001/time')
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData =  await response
            const text = await jsonData.json()
            // console.log(response.json())
            // console.log(response.text());
            await setData(text);
            console.log(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>button !</h1>
            <button onClick={fetchData}>
                Fetch Data
            </button>
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>Data</h2>
                    <pre>{JSON.stringify(data)}</pre>
                </div>
            )}
        </div>
    );
};


export default TimeButton;

// <pre>{JSON.stringify(data, null, 2)}</pre>


// import React, {useState} from "react";
//
//
//
//
// const timeButtonWrap = () => {
//     const [responseData, setResponseData] = [null, null];
//     const timeButton = () => {
//
//         fetch('http://127.0.0.1:5001/time', {
//             mode: 'cors',
//             // credentials: 'include',
//             // method: 'POST',
//             method: 'GET',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // Handle the response data
//                 setResponseData(data); // Update state with received data
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//         return (
//             // <div>
//             //     <h2>Received Data:</h2>
//             //     <pre>{JSON.stringify(responseData, null, 2)}</pre>
//             // </div>
//             <div>
//                 <pre>{JSON.stringify(responseData, null, 2)} </pre>
//             </div>
//
//         );
//     }
//     return timeButton();
//
// };
//
// export default timeButtonWrap();