async function  server () {
    const uri = `${mainURI}?name=${usrname}&vpa=${vpa}`
    try{
        const response = await fetch(uri);
        
        if(!response.ok){
            throw new Error ('HTTP error, not correct url parameter as required')
        }
        let svgtext = await response.text()
        console.log(svgtext)
    } catch(err){
        console.log(`Error : ${err}`)
    }
 }

 const mainURI = "https://upiqr.in/api/qr"
 let usrname = "satyam";
 let vpa = "satyam2001anand@oksbi"

server()