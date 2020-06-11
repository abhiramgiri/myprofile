$(window).on('load', function () {
    console.log("Getting Client Information");
    const getFormattedDate= async () => {
            var d=new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
            return d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);
        }
    const clientAction = async () => {
        const currentTime= await getFormattedDate();
        const response = await fetch('https://ipinfo.io/json');
        const myJson =await response.json(); //extract JSON from the http response
        const myBody= JSON.stringify({...myJson,sourceinfo:window.location.href,visit_time:currentTime});    
        console.log(myBody);
        const postresponse = await fetch('https://visit2doctor.com/common/save_client_details.php', {
                method: 'POST',
                body: myBody, // string or object
                headers: {
                'Content-Type': 'application/json'
                }
            });
            if("SEND"==await postresponse.text()){
                console.log("Posted Client Information visited at "+currentTime);
            }
            
      }
      clientAction();
});