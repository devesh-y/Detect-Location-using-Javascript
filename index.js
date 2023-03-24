const button=document.querySelector("button")
button.onclick=()=>{
    console.log("happen");
    navigator.geolocation.getCurrentPosition((pos)=>{
        const {latitude, longitude}=pos.coords;
        var url=`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        fetch(url).then((res)=>{
            return res.json();
        }).then( (data)=>{
          
            document.write(data.display_name);
            console.log(data);
        }).catch((err)=>{
            console.log("error in fetching the data");
        })
    })
}