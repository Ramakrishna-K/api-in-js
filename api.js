const handleGetData = async () => {
let city = document.getElementById("usercity").value
    let res =await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/EN`,

        {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '95f1d16b2cmsha3764bf0fd7707dp115fddjsn93574627e853',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }

        })

    let data = await res.json()

    console.log(data.main)

     


    let div =document.createElement("div")
    let temp =document.createElement("h1")
    let humidity = document.createElement("h2")
    let max_temp = document.createElement("p")
    let min_temp = document.createElement("p")


    temp.innerText= data.main.temp
    humidity.innerText = data.main.humidity
    max_temp.innerText = data.main.temp_max
    min_temp.innerText = data.main.temp_min

    div.appendChild(temp)
    div.appendChild(humidity)
    div.appendChild(max_temp)
    div.appendChild(min_temp)

    document.body.appendChild(div)


















    } 
