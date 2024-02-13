// promises are objects that reflect the eventual success or failure of an asynchronous action.

function fetchData()
{
    let prom = new Promise((resolve, reject) => {
        setTimeout(()=>{
            const success= true;
            if(success)
            {
                const data = "Hello world";
                resolve(data);
            }
            else{
                const error= "Failed to fetch data";
                reject(error);
            }
        }, 2000);
    });
    return prom;
}

console.log("Start");

fetchData()
    .then(data => {
        console.log("Data received: ", data);
    })
    .catch(error => {
        console.error("Error: ", error);
    })
    .finally(() => {
        console.log("Operation Complete.");
    });


console.log("End.");