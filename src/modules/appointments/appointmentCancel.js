import { cancelAppointment } from "../../Services/cancelAppointment.js";
import { appointmentsDays } from "./load.js";

const periods = document.querySelectorAll(".boxAppointments");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("remove")) {
      const item = event.target.closest("button");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          //Request for delete
          await cancelAppointment({ id });
          appointmentsDays();
        }
      }
    }
  });
});
