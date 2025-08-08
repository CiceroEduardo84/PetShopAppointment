const buttonAppointment = document.getElementById("showForm");
const pageNewAppointment = document.querySelector(".containerNewAppointment");
const boxNewAppointment = document.querySelector(".boxNewAppointment");
const buttonClose = document.querySelector(".close");


export const hideBoxAppointment = () => {
  pageNewAppointment.style.display = "none";
};

buttonClose.onclick = () => {
    hideBoxAppointment();
};

// Show form
buttonAppointment.onclick = () => {
  pageNewAppointment.style.display = "block";
};

// Hide note box when clicking outside it
pageNewAppointment.onclick = () => {
  if (!boxNewAppointment.contains(event.target)) {
    hideBoxAppointment();
  }
};
