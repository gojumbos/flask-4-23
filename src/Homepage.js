const HomePage = () => {
    const handleBasicClick = () => {
        let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        // headers.append('Origin','http://localhost:3000');

        fetch('http://127.0.0.1:5001', {
            mode: 'cors',
            // credentials: 'include',
            // method: 'POST',
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    return (
        <div>
            <h1>Welcome to my React App!</h1>
            <button onClick={handleBasicClick}>Send Request to Flask Server</button>
        </div>
    );
};

export default HomePage;
