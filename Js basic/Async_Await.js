// Async and Await make promise easier to write. Async causes a function to return a promise. Await causes a function to wait for a promise

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

async function fetchDataAndProcess(){
    try{
        console.log("Start");
        const data = await fetchData();
        console.log("Data Received: ",data);
        console.log("End");
    }
    catch(error) {
        console.error("Error: ",error);
    }
    finally{
        console.log("Operation Complete.");
    }
}

fetchDataAndProcess();
