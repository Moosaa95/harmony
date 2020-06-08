//represent hub
class Hub {
    constructor(sN, fullName, email, phoneNumber, areaOfResidence, date){
        this.sN = sN;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.areaOfResidence = areaOfResidence;
        this.date = date;
    }
}


//UI class : Handle UI tasks
class UI{
    static displayHub() {
        const storedHubList = [
            {
                fullName : 'Musa Abdullahi',
                email : 'moosaabdullahi45@gmail.com',
                phoneNumber: "09045654345",
                areaOfResidence : 'Gwarinpa',
                date:   '23/3/20'
            },
            {
                fullName : 'Musa Abdullahi',
                email : 'moosaabdullahi45@gmail.com',
                phoneNumber: "09045654345",
                areaOfResidence : 'Gwarinpa',
                date:   '23/3/20'
            }
        ];
        const hubs = storedHubList;
        hubs.forEach((hub) => UI.addHubToList(hub));
        
    }
   //creating the UI for addHubToList

   static addHubToList(hub){
       const list = document.querySelector('#body-list');
       const row = document.createElement('tr');
       row.innerHTML = `
       <td>${hub.fullName}</td>
       <td>${hub.email}</td>
       <td>${hub.phoneNumber}</td>
       <td>${hub.areaOfResidence}</td>
       <td>${hub.date}</td>
       <td><a href"#" class="btn btn-danger btn-sm delete" id="delete">X</a></td>
       `;
       list.appendChild(row);
   }


}

//dsiplay UL
document.addEventListener('DOMContentLoaded', UI.displayHub);


function printData() {
    var divToPrint = document.getElementById("tab");
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
  }
  
  document.querySelector('#print').addEventListener('click', function() {
    printData();
    window.location = 'index.html';
    document.querySelector('#delete').innerText = '';
  })

