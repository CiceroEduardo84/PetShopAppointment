import dayjs from "dayjs";
import { ApiConfig } from "./api";

export async function searchAppointmentByDay({ data }) {
  try {
    // New request
    const response = await fetch(`${ApiConfig.baseURL}/appointments`);

    // convert json
    const data = await response.json();

    // Filter appointments using day selected.
    const dailyAppointments = data.filter((appointments) => {
      dayjs(date).isSame(appointments.when, "day");
    });

    return dailyAppointments;
  } catch (error) {
    console.error(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado!");
  }
}
