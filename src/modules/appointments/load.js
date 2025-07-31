import { searchAppointmentByDay } from "../../Services/searchAppointmentByDay";
import { appointmentsShow } from "./appointmentsShow";

const selectedData = document.getElementById("searchDate");

export async function appointmentsDays() {
  //Obtem a data do input.
  const date = selectedData.value;

  // Busca na API os agendamentos
  const dailyAppointments = await searchAppointmentByDay({ date });

  appointmentsShow({ dailyAppointments });
}
