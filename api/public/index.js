//importing modules
import {create_rows} from "./scripts/rows.js";
import {getData,postData} from "./scripts/api_action.js";

//buttons
const get = document.querySelector("#get");
const post = document.querySelector("#post");

/*button actions*/
//button to get data
get.addEventListener("click",async()=>{
    //clear table
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    //get data from api
    let results = await getData('http://localhost:3000/api/employee_info');

    //loop through elements and create rows
    results.forEach(element => {       
        create_rows(element,tbody);
    });

});
//button to post data
post.addEventListener("click",async()=>{
    //selecting form elements
    const form = document.querySelector("#emp_form")
    let emp_id = form.elements[0].value;
    let first_name = form.elements[1].value;
    let last_name = form.elements[2].value;
    let data = {};
    data.emp_id = emp_id;
    data.first_name = first_name;
    data.last_name = last_name;
    await postData('http://localhost:3000/api/add_employee',data);
})











