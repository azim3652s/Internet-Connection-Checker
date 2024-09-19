
window.addEventListener("load", checkInternetConncetion);


function checkInternetConncetion(){
    const statusText=document.getElementById('statusText');
    const IPAddressText=document.getElementById('IPAddressText');
    const networkStrengthText=document.getElementById('networkStrengthText');

    statusText.textContent='checking...';

    if(navigator.online){
        fetch('https://api.ipify.org?format=json')
        .then((response) => response.json())
        .then((data)=>{
            IPAddressText.textContent=data.ip;
            statusText.textContent='Connected';

            const connection=navigator.connection;

            const networkStrength=connection?connection.downlink +'mbps':'unknown';
            networkStrengthText.textContent=networkStrength;

        })
        .catch(()=>{
            statusText.textContent='Disconnected';
            IPAddressText.textContent='-';
            networkStrengthText.textContent='-';
        })
    }else{
        statusText.textContent='Disconnected';
        IPAddressText.textContent='-';
        networkStrengthText.textContent='-';
    }
}