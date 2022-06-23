let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Action</th>"
    if(empPayrollList.length == 0) return;
    let innerHtml=`${headerHtml}`;
    //let empPayrollList=createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
    <tr>
        <td><img class="profile"alt="" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="${empPayrollData._id}" onclick="remove(this)" 
                src="../assets/Delete.jpeg" alt="delete">
            <img id="${empPayrollData._id}" onclick="update(this)"
                src="../assets/Edit.png"alt="edit">
        </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}