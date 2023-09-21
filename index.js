

const employeesData = 
[
    {name:'Anna',email:'Anna45@email.com',age:27,dept:'Technology',gradCourse:'B.Tech',gradYear:2015,gradPerf:'Good',postgrad:false,workBefore:true,workEx:'0-1 years'},

    {name:'Mary',email:'mary16@email.com',age:30,dept:'Accounts',gradCourse:'B.Com',gradYear:2015,gradPerf:'Good',postgrad:true,workBefore:false,workEx:'None'},
    {name:'Jack',email:'jack@email.com',age:33,dept:'Operations',gradCourse:'BA',gradYear:2015,gradPerf:'Average',postgrad:false,workBefore:true,workEx:'3+ years'},
    {name:'John',email:'john@email.com',age:24,dept:'Technology',gradCourse:'B.Tech',gradYear:2015,gradPerf:'Good',postgrad:false,workBefore:false,workEx:'None'},
    {name:'Edwards',email:'edwards@email.com',age:29,dept:'Accounts',gradCourse:'B.Com',gradYear:2015,gradPerf:'Excellent',postgrad:true,workBefore:true,workEx:'3+ years'},
    {name:'Tim',email:'tim001@email.com',age:31,dept:'Operations',gradCourse:'BSc',gradYear:2015,gradPerf:'Average',postgrad:false,workBefore:true,workEx:'0-1 years'},
    {name:'Julia',email:'julia@email.com',age:28,dept:'Technology',gradCourse:'B.Tech',gradYear:2015,gradPerf:'Excellent',postgrad:true,workBefore:true,workEx:'1-3 years'},
    {name:'Steve',email:'steve@email.com',age:25,dept:'Operations',gradCourse:'BA',gradYear:2015,gradPerf:'Good',postgrad:false,workBefore:true,workEx:'0-1 years'},
    {name:'Sam',email:'sam77@email.com',age:33,dept:'HR',gradCourse:'BBA',gradYear:2015,gradPerf:'Good',postgrad:false,workBefore:true,workEx:'1-3 years'},
]

const errors1 = {}
const Grade= [
        {
            "value": "Excellent",
            "text": "A"
        },
        {
            "value": "Good",
            "text": "B"
        },
        {
            "value": "Average",
            "text": "C"
        },
        {
            "value": "Poor",
            "text": "D"
        }
    ]

const years = [
    {
        "value": "None",
        "text": "None"
    },
    {
        "value": "0-1 years",
        "text": "0-1 years"
    },
    {
        "value": "1-3 years",
        "text": "1-3 years"
    },
    {
        "value": "3+ years",
        "text": "3+ years"
    }
]
const empExpn = [{name:'John',category:'Local Travel',billId:'NP7561',amount:64,payment:'Self',approved:true},{name:'Anna',category:'Communication',billId:'BN8561',amount:39,payment:'Self',approved:false},{name:'Edwards',category:'Local Travel',billId:'AT5461',amount:58,payment:'Corporate Card',approved:true},{name:'Julia',category:'Local Travel',billId:'RR5492',amount:71,payment:'Self',approved:true},{name:'Julia',category:'Out of City Travel',billId:'KT8785',amount:277,payment:'Bill to Company',approved:true},{name:'Edwards',category:'Others',billId:'UR0400',amount:25,payment:'Corporate Card',approved:false},{name:'Edwards',category:'Out of City Travel',billId:'CC6586',amount:305,payment:'Corporate Card',approved:false},{name:'Julia',category:'Communication',billId:'DL3425',amount:43,payment:'Self',approved:false},{name:'Julia',category:'Out of City Travel',billId:'MW65775',amount:248,payment:'Bill to Company',approved:true},{name:'Edwards',category:'Others',billId:'JR56732',amount:52,payment:'Corporate Card',approved:true},{name:'Julia',category:'Out of City Travel',billId:'BK0074',amount:405,payment:'Bill to Company',approved:false},{name:'Edwards',category:'Communication',billId:'JR56732',amount:72,payment:'Corporate Card',approved:true}]
const errors = {}
let isOriginalView = true;

const employee = [];
for (let i = 0; i < employeesData.length; i++) {
  const productName = employeesData[i].name;
  if (!employee.includes(productName)) {
    employee.push(productName);
  }
}
const category = [];
for (let i = 0; i < empExpn.length; i++) {
  const productName = empExpn[i].category;
  if (!category.includes(productName)) {
    category.push(productName);
  }
}
const billPaid = ['Corporate card','Bill to company', 'Self']

navbar()
function navbar(){
    document.getElementById('nav').innerHTML=`<nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showEmployees()">Show Employees</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="addEmployeeForm()">Add an Employee</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showDepartments()">Departments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="addDepartment()">Add a Dept</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showExpenses()">Expenses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="addExpense()">Add Expense</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`
}
function showExpenses(err = empExpn,index){
    if(!isNaN(index)){
        let newExpn = empExpn.filter((obj)=>{
            if(employeesData[index].name == obj.name)
            return obj
        })
        err = newExpn
        console.log(err);
    }
    else{
        console.log(err);
        err = empExpn
    }
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `<h2>All Employee Expensess List</h2>
        <table class="table">
            <thead>
                <tr>
                    <th onclick=sortEmployees(0)>Name</th>
                    <th onclick=sortEmployees(1)>category</th>
                    <th onclick=sortEmployees(2)>Bill-id</th>
                    <th onclick=sortEmployees(3)>Amount</th>
                    <th onclick=sortEmployees(4)>Payment</th>
                    <th onclick=sortEmployees(5)>Approved</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                ${err.map((employee,index) => `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.category}</td>
                        <td>${employee.billId}</td>
                        <td>${employee.amount}</td>
                        <td>${employee.payment}</td>
                        <td>${employee.approved}</td>
                        <td>${employee.approved== false ? '<button class="btn btn-secondary" onclick = "ApproveEmp('+index+')">Approve</button>' : ''}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>`
}
function ApproveEmp(index){
    empExpn[index].approved = true
    showExpenses()
}

function showEmployeesAlternate() {
    let contentDiv = document.getElementById("content");
    let employeesHtml = `<h2>Employee List - Alternate View</h2>
    <div class="card-group"> <div class="row row-cols-1 row-cols-md-3 g-4">`
   
    employeesData.map((employee,index) => {
        employeesHtml+= `<div class="col">
    <div class="card h-100">`+
        `<div id="show-`+index+`" class="card-body">`

        employeesHtml += '<strong>Name:</strong> ' + employee.name +'</br>'
        employeesHtml += '<strong>Email:</strong> ' + employee.email +'</br>' 
        employeesHtml += '<strong>Age:</strong> ' + employee.age +'</br>'
        employeesHtml += '<strong>Dept:</strong> ' + employee.dept +'</br>'
        employeesHtml += '<button onclick = showfulldiv('+index+') class="btn btn-primary mt-3">More details</button>'
        employeesHtml += '</div></div></div>';
    });

    employeesHtml += '</div></div><button class="btn btn-primary mt-3" onclick="showEmployees()">Original View</button>';
    
    contentDiv.innerHTML = employeesHtml;
}

function showfulldiv(index){
    showEmployeesAlternate()
    let id = 'show-'+index    
    console.log(id)
    let employee = employeesData[index]
    let  employeesHtml = ''
    employeesHtml += '<strong>Name:</strong> ' + employee.name +'</br>'
    employeesHtml += '<strong>Email:</strong> ' + employee.email +'</br>' 
    employeesHtml += '<strong>Age:</strong> ' + employee.age +'</br>'
    employeesHtml += '<strong>Dept:</strong> ' + employee.dept +'</br>'
    employeesHtml += '<strong>Course:</strong> ' + employee.gradCourse +'</br>'
    employeesHtml += '<strong>Perf</strong> ' + employee.gradPerf +'</br>'
    employeesHtml += '<strong>Post-Grad:</strong> ' + employee.postgrad +'</br>'
    employeesHtml += '<strong>Work Before:</strong> ' + employee.workBefore +'</br>'
    employeesHtml += '<strong>workEx:</strong> ' + employee.workEx +'</br>'
    console.log(employeesHtml)
document.getElementById(id).innerHTML = employeesHtml

}

function showEmployees() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Employee List</h2>
        <table class="table">
            <thead>
                <tr>
                    <th onclick=sortEmployees(0)>Name</th>
                    <th onclick=sortEmployees(1)>Email</th>
                    <th onclick=sortEmployees(2)>Age</th>
                    <th onclick=sortEmployees(3)>Dept</th>
                    <th onclick=sortEmployees(4)>Graduation</th>
                    <th onclick=sortEmployees(5)>Graduation year</th>
                    <th onclick=sortEmployees(6)>Grad profermance</th>
                    <th onclick=sortEmployees(7)>Post Grad</th>
                    <th onclick=sortEmployees(8)>Work before</th>
                    <th onclick=sortEmployees(9)>Work Exp</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                ${employeesData.map((employee,index) => `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.age}</td>
                        <td>${employee.dept}</td>
                        <td>${employee.gradCourse}</td>
                        <td>${employee.gradYear}</td>
                        <td>${employee.gradPerf}</td>
                        <td>${employee.postgrad}</td>
                        <td>${employee.workBefore}</td>
                        <td>${employee.workEx}</td>
                        <td><button   class="btn btn-secondary" onclick = "addEmployeeForm({},{},${index})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button></td>
                        <td><button  class="btn btn-danger" onclick = "removeEmp(${index})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button></td>
                        <td><button  class="btn btn-warning"  onclick = "showExpenses({},${index} )"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg></button></td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
        <button onclick = showEmployeesAlternate() class="btn btn-primary mt-3">Change view
            </button>
    `;
}


const departmentsData = [];
function showDepartments() {
    const contentDiv = document.getElementById("content");
    if (departmentsData.length === 0) {
        contentDiv.innerHTML = '<h2>No Departments Found</h2>';
    } else {
        contentDiv.innerHTML = `
            <h2>Department List</h2>
            <ul class="list-group">
                ${departmentsData.map(department => `
                    <li class="list-group-item">${department}</li>
                `).join("")}
            </ul>
        `;
    }
}

function addDepartment() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Add Department</h2>
        `+makeinput("Deparment name",'text','','deptName','Department name')+`
            <br><button type="button" class="btn btn-primary" onclick="submitDepartment()">Submit</button>
    `;
}

function submitDepartment() {
    const deptNameInput = document.getElementById("deptName");
    const newDeptName = deptNameInput.value;

    departmentsData.push(newDeptName);

    // Go back to the department list
    showDepartments();
}
function addEmployeeForm(err={},values={},index) {
    if(!isNaN(index)){
        let workobj = employeesData[index]
        values.name = workobj.name
        values.age = workobj.age
        values.email = workobj.email
        values.dept = workobj.dept
        values.gradCourse = workobj.gradCourse
        values.gradYear = workobj.gradYear
        values.gradPerf = workobj.gradPerf
        values.workEx = workobj.workEx
    }
    console.log(values);
    const contentDiv = document.getElementById("content");
    const departmentOptions = departmentsData.map(department => `<option>${department}</option>`).join("");
    let m = []
    for(let i = 2000; i<2024;i++){
        m.push(i)
    }
    let pos = []
    for(let i=0;i<Grade.length;i++){
        if(Grade[i].value == values.gradPerf){
        pos.push(i)
        }
    }
    let posyr = []
    for(let i=0;i<years.length;i++){
        if(years[i].value == values.workEx){
        posyr.push(i)
        }
    }
    console.log(posyr);
    console.log(pos);
    contentDiv.innerHTML = `
        <h2>Add Employee</h2>
       `+makeinput("Employee name","text",values.name||"","name","Enter name",err.name)
        +makeinput("Emali","email",values.email||"","email","Enter email-id",err.email)
        +makeinput("Age","number",values.age||'',"age","Enter age",err.age)+
        makeDD(departmentsData,values.dept||"Working depeartment","dept",err.dept)+
        makeinput("Graduation","text",values.gradCourse||"","gradCourse","Which degree did you get in graduation")+
        makeDD(m,values.gradYear||'Year','grad-year')
        +makeGrRB(Grade,'',pos[0])+
        makeCB("Are you graduate","cb-1")
        +makeCB("Do you have prior work experience","cb-2")
        +makeYrRB(years,err.workEx||'',posyr[0])+    
        `<br>
        <button type="button" class="btn btn-primary" onclick="submitEmployee(`+index+`)">Submit</button>
    `;
}

function sortEmployeesByHeader(header) {
    const contentDiv = document.getElementById("content");
    
    employeesData.sort((a, b) => {
        if (a[header] < b[header] ) return -1;
        if (a[header] > b[header] ) return 1;
        return 0;
    });

    showEmployees();
}


function submitEmployee(index) {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const ageInput = document.getElementById("age").value;
    const dept =  document.getElementById("dept").value
    const gradCourse = document.getElementById("gradCourse").value
    const gradYear =  document.getElementById("grad-year").value
    const grade = Grade.map(obj=>{
        if( document.getElementById(obj.value).checked){
            return obj.value
        }
        else{
            return ""
        }
    }).join('')

    const cb1 = document.getElementById("cb-1");
let cb1Val = false;
if (cb1) {
    if (cb1.checked) {
        cb1Val = true;
    }
} else {
    console.error("Checkbox cb-1 not found.");
}
    
    const cb2 =  document.getElementById("cb-2")
    let cb2Val = false
    if(cb2.checked)
        cb2Val = true

    const workYear =  years.map(obj=>{
        if( document.getElementById(obj.value).checked)
            return obj.value
        else{
            return ""
        }
    }).join('')
    
    
    const newEmployee = {
        name: nameInput,
        email: emailInput,
        age: +(ageInput),
        dept: dept,
        gradCourse: gradCourse ,
        gradYear: gradYear,
        gradPerf: grade,
        postgrad: cb1Val,
        workBefore: cb2Val,
        workEx: workYear
    };
    if(validateObj(newEmployee)){
        employeesData.push(newEmployee);
        showEmployees();
    }
    else{
        addEmployeeForm(errors,{
            name: nameInput,
            email: emailInput,
            age: +(ageInput),
            dept: dept,
            gradCourse: gradCourse ,
            gradYear: gradYear,
            gradPerf: grade,
            postgrad: cb1Val,
            workBefore: cb2Val,
            workEx: workYear
        })
    }
}

function addExpense(err={},values={}){
    let m = []
    for(let i=0;i<billPaid.length;i++){
        if(billPaid[i] == values.payment)
        m.push(i)
    }
    let contentDiv =  document.getElementById("content");
    contentDiv.innerHTML = `<h1>Add Expenses</h1>
    Employee: <br>
    ${makeDD(employee,values.name||"Select employee",'emp-dd',err.name)}
    Expense category:<br>
    ${makeDD(category,values.category||"Select expense category",'category-dd',err.category||'')}
    ${makeinput("Bill id","text",values.billId||'','bill-text','Enter Bill id',err.billId||'')}
    ${makeinput("Amount","text",values.amount||'','amount-text','Enter Amount',err.amount||'')}
    How was the Bill Paid:
    ${makeRB(billPaid,err.billp||'',m[0])}
    <div class="form-check">
<input class="form-check-input" type="checkbox" value="Approved" id="approved-cb">
<label class="form-check-label" for="flexCheckDefault">
Has the expense approved
</label>
</div><br><button type="submit" class="btn btn-primary" onclick="submitExpense()">Submit</button>`
}

function submitExpense(){
    let emp = document.getElementById('emp-dd').value
    let category = document.getElementById('category-dd').value
    let billId = document.getElementById('bill-text').value
    let amount = document.getElementById('amount-text').value
    let billp = billPaid.map(obj => {
    if (document.getElementById(obj).checked)
        return obj
    }).join('');
    let approved = document.getElementById('approved-cb').checked

    let pObj = {name:emp,category:category,billId:billId,amount:amount,payment:billp,approved:approved}
    console.log(pObj);
    if(validateExp(pObj)){
        empExpn.push(pObj)
        showExpenses()
    }
    else{
        addExpense(errors1,pObj)
    }

}

function validateExp(object) {
    const errors1 = {};
  
    try {
      if (object.name === 'Select employee') {
        throw new Error('Employee is not defined');
      }
  
      if (object.category === 'Select expense category') {
        throw new Error('Category is mandatory');
      }
  
      if (!object.billId) {
        throw new Error('Select bill id');
      }
  
      if (!object.amount) {
        throw new Error('Select amount');
      }
  
      if (!object.payment) {
        throw new Error('Select Payment');
      }
    } catch (error) {
        alert (error.message)
      console.error(error.message);
      return false;
    }
  
    console.log(errors1);
    return true;
  }

function makeCB(label,id){
  let str = `<div class="form-check">
    <label class="form-check-label" for="flexCheckDefault">
`+label+`</label>`+
`<input class="form-check-input" type="checkbox" value="`+label+`" id="`+id+`"> </div>`

return str
}

function makeRB(arr,err={},index){
    let str = `<br>`;
    let radioGroupName = `RadioGr${index || ''}`;
    str += arr.map((obj,pos) => {
        let isChecked = !isNaN(index) && pos==index ? ' checked' : '';
        return `<div class="form-check">
                <input class="form-check-input" type="radio" name="${radioGroupName}" id="${obj}" value="${obj}"${isChecked}>
                <label class="form-check-label" for="${obj}">${obj}</label>
                </div>`;
    }).join('');

    str += err ? `<span class="text-danger">${err}</span><br>` : '';

    return str;
}

function makeYrRB(arr, err = {}, index) {
  let str = `<br>`;

  let radioGroupName = `RadioYr${index || ''}`;
  str += arr.map(obj => {
    let isChecked = !isNaN(index) && years[index].value === obj.value ? ' checked' : '';
    return `<div class="form-check">
              <input class="form-check-input" type="radio" name="${radioGroupName}" id="${obj.value}" value="${obj.value}"${isChecked}>
              <label class="form-check-label" for="${obj.value}">${obj.text}</label>
            </div>`;
  }).join('');

  str += err ? `<br><span class="text-danger">${err||''}</span><br>` : '';

  return str;
}

function makeGrRB(arr, err = {}, index) {
  let str = `<br>`;
  let radioGroupName = `RadioGr${index || ''}`;
  str += arr.map(obj => {
    let isChecked = !isNaN(index) && Grade[index].value === obj.value ? ' checked' : '';
    return `<div class="form-check">
              <input class="form-check-input" type="radio" name="${radioGroupName}" id="${obj.value}" value="${obj.value}"${isChecked}>
              <label class="form-check-label" for="${obj.value}">${obj.text}</label>
            </div>`;
  }).join('');

  str += err ? `<br><span class="text-danger">${err}</span><br>` : '';

  return str;
}


function makeDD(arr, text,id,err='') {
  let str = `<select class = "" aria-label="Default select example" id = "`+id+`"><option selected disabled>` + text + `</option>`
  str += arr.map(obj => {
    return `<option value="`+ obj + `">` + obj + `</option>`
  })
  str+= `</select><br>`
  str+=  err ? `<span class="text-danger">`+err+`</span><br>` : ''
  return str
}
function makeinput(label, type, value, id, ph, err='' , wildCard) {
  let str = `<label class="form-label">` + label + `</label> <input type="` + type + `" value="` + value + `" class="form-control" id="` + id + `" placeholder="` + ph + `" ` +wildCard+` required>` 
  str +=  err ? `<span class="text-danger">`+err+`</span><br>` : ''
  return str
}

function validateObj(object) {
    const errors = {};
  
    try {
      if (!object.name) {
        throw new Error('Name is not defined');
      }
  
      if (!object.email) {
        throw new Error('Email is mandatory');
      }
  
      if (!object.age) {
        throw new Error('Enter correct age');
      }
  
      if (object.dept === 'Working department') {
        throw new Error('Select department');
      }
  
      if (!object.workEx) {
        throw new Error('Select work experience');
      }
    } catch (error) {
        alert(error.message)
      console.error(error.message);
      return false;
    }
  
    console.log(errors);
    return true;
  }
function removeEmp(index){
    employeesData.splice(index, 1)
    showEmployees()
}

function sortEmployees(index) {
    switch (index) {
        case 0:
            employeesData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 1:
            employeesData.sort((a, b) => a.email.localeCompare(b.email));
            break;
        case 2:
            employeesData.sort((a, b) => a.age - b.age);
            break;
        case 3:
            employeesData.sort((a, b) => a.dept.localeCompare(b.dept));
            break;
        case 4:
            employeesData.sort((a, b) => a.gradCourse.localeCompare(b.gradCourse));
            break;
        case 5:
            employeesData.sort((a, b) => a.gradYear - b.gradYear);
            break;
        case 6:
            employeesData.sort((a, b) => a.gradPerf.localeCompare(b.gradPerf));
            break;
        case 7:
            employeesData.sort((a, b) => a.postgrad - b.postgrad);
            break;
        case 8:
            employeesData.sort((a, b) => a.workBefore - b.workBefore);
            break;
        case 9:
            employeesData.sort((a, b) => a.workEx.localeCompare(b.workEx));
            break;
        default:
            break;
    }
    
    // After sorting, update the displayed employees
    showEmployees()
}