//function for createing table row and columns 
function create_rows(element,tbody){
    //creating row and columns
    let row = document.createElement("tr");
    let emp_id = document.createElement("td");
    let first_name = document.createElement("td");
    let  last_name = document.createElement("td");
    let birth_day = document.createElement("td");
    let sex = document.createElement("td");
    let salary = document.createElement("td");
    let super_id = document.createElement("td");
    let branch_id = document.createElement("td");
    //setting "element object properties" as values for columns
    emp_id.innerHTML = element.emp_id;
    first_name.innerHTML = element.first_name;
    last_name.innerHTML = element.last_name;
    birth_day.innerHTML = element.birth_day;
    sex.innerHTML = element.sex;
    salary.innerHTML = element.salary;
    super_id.innerHTML = element.super_id;
    branch_id.innerHTML = element.branch_id;
    row.appendChild(emp_id);
    row.appendChild(first_name);
    row.appendChild(last_name);
    row.appendChild(birth_day);
    row.appendChild(sex);
    row.appendChild(salary);
    row.appendChild(super_id);
    row.appendChild(branch_id);
    tbody.appendChild(row);
}

export {create_rows};