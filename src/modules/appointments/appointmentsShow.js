import dayjs from "dayjs";

//Selciona os periodos
const morning = document.getElementById("morning");
const afternoon = document.getElementById("afternoon");
const night = document.getElementById("night");

export function appointmentsShow({ dailyAppointments }) {
  try {
    // clear the periodes
    morning.innerHTML = "";
    afternoon.innerHTML = "";
    night.innerHTML = "";

    dailyAppointments.forEach((appointment) => {
      const cardAppointment = document.createElement("div");
      const time = document.createElement("span");
      const name = document.createElement("span");
      const namePet = document.createElement("strong");
      const desc = document.createElement("span");
      const buttonCancel = document.createElement("button");

      const hour = dayjs(appointment.when).hour();

      time.textContent = dayjs(appointment.when).format("HH:mm");
      time.classList.add("time");

      namePet.textContent = appointment.namePet;
      name.textContent = `${appointment.nameTutor}/`;
      name.appendChild(namePet);
      name.classList.add("name");

      desc.textContent = appointment.description;
      desc.classList.add("description");

      buttonCancel.textContent = "Remover agendamento";
      buttonCancel.setAttribute("data-id", appointment.id)
      buttonCancel.classList.add("remove");

      cardAppointment.append(time, name, desc, buttonCancel);
      cardAppointment.classList.add("cardAppointment");

      if (hour <= 12) {
        morning.appendChild(cardAppointment);
      } else if (hour > 12 && hour < 18) {
        afternoon.appendChild(cardAppointment);
      } else {
        night.appendChild(cardAppointment);
      }
    });
  } catch (error) {
    console.error(error);
    alert("Não foi possível exibir os agendamentos!");
  }
}
