async function getData(e); 
    e.preventDefault();
    let textboxElem=document.getElementById("textbox");
    let city=textboxElem.value;
    let API = `https://api.weatherapi.com/v1/current.json?key=b56fc474a2c04caa90c73721260105&q=${city}`;
    if(city==""){
        alert("Please enter a city name");
    }
    else{
        try{
            let response=await fetch(API);
            let data=await response.json();
            console.log(data);
}
        catch(error){
            console.log(error);
            alert("Error fetching weather data");
        }
    }