const buttonAppointment = document.getElementById("showForm");
const pageNewAppointment = document.querySelector(".containerNewAppointment");
const boxNewAppointment = document.querySelector(".boxNewAppointment");

// Show form
buttonAppointment.onclick = () => {
  pageNewAppointment.style.display = "block";
};

// Hide note box when clicking outside it
pageNewAppointment.onclick = () => {
  if (!boxNewAppointment.contains(event.target)) {
    pageNewAppointment.style.display = "none";
  }
};
