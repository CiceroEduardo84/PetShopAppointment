import dayjs from "dayjs";
import { ApiConfig } from "./api";

export async function searchAppointmentByDay({ date }) {
  try {
    // New request
    const response = await fetch(`${ApiConfig.baseURL}/appointments`);

    // convert json
    const data = await response.json();

    // Filter appointments using day selected.
    const dailyAppointments = data.filter((appointments) => {
      return dayjs(date).isSame(appointments.when, "day");
    });

    // Ordering appointments
    const appointmentOrder = dailyAppointments.sort((a, b) => {
      return dayjs(a.when).valueOf() - dayjs(b.when).valueOf();
    });

    return appointmentOrder;
  } catch (error) {
    console.error(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado!");
  }
}
