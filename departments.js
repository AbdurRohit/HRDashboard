// Department class
class Department {
    constructor(name) {
      this.name = name;
    }
  }
  
  // DepartmentsManager class
  class DepartmentsManager {
    constructor() {
      this.departments = [];
    }
  
    addDepartment(department) {
      this.departments.push(department);
    }
  
    showDepartments() {
        const contentDiv = document.getElementById("content");
        if (this.departments.length === 0) {
            contentDiv.innerHTML = '<h2>No Departments Found</h2>';
        } else {
            contentDiv.innerHTML = `
                <h2>Department List</h2>
                <ul class="list-group">
                    ${departments.map(department => `
                        <li class="list-group-item">${department}</li>
                    `).join("")}
                </ul>
            `;
        }
    }
  }

export {Department,DepartmentsManager}