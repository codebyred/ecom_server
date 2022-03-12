/*api actions*/
// get data
async function getData(url){
    
    let response = await fetch(url,{
        method:'GET',
        mode:'cors',
        header:{
            'Content-Type':'application/json'
        }
    });
    let results = await response.json();
    return results;
}
//post data 
async function postData(url,data){

    await fetch(url,{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    
}
export {getData,postData};