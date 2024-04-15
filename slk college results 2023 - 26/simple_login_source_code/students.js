const tableBody = document.querySelector('#students-table tbody');

const names = ['Aman Kumar', 'Mayank Bharti', 'Krishlay Anand', 'Piyush Raj', 'Samir Raj', 'Manish Kumar','Aditya Raj','Rakhi Kumari','Ritik Kumar',
'Ashutosh Gupta','Reshmi Kumari','Nishta Nidhi','Vikash Kumar','Shravan Kumar','Shivam Kumar','Snehlata Kumari','Sakshi Kumari','Anish Kumar Ravi','Shivam Kumar',
'Vipin Kushvaha','Prashant Kumar','Bajrang Kumar','Shashibhushan Kumar','Rupam Kumari','Raushan Kumar','Prabhat Ranjan','Kahkashan Khurshid','Vishwajeet Kumar','Shambhavi','Kanaklata','Rakesh Raushan','Payal Kumari','Neha Kumari','Chandan Kumar','Chanchal Kumar','Santosh Kumar','Manas Kumar','Deepak Kumar','Amit Kumar','Aslam Alam'

];
const fathersNames = ['Sri', 'Satyam', 'Addf', 'Akash', 'Bhavesh'];
const registrationNumbers = ['100000', '100001', '14526', '14578', '15987'];

names.forEach((name, index) => {
  const rowElement = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  rowElement.appendChild(nameCell);




  const fathersNameCell = document.createElement('td');
  fathersNameCell.textContent = fathersNames[index];
  rowElement.appendChild(fathersNameCell);

  const rollNumberCell = document.createElement('td');
  rollNumberCell.textContent = index + 1;
  rowElement.appendChild(rollNumberCell);

  const classCell = document.createElement('td');
  classCell.textContent = registrationNumbers[index];
  rowElement.appendChild(classCell);

  const sectionCell = document.createElement('td');
  sectionCell.textContent = 'BCA';
  rowElement.appendChild(sectionCell);

  

  tableBody.appendChild(rowElement);
});