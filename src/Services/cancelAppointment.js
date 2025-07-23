import { ApiConfig } from "./api";

export async function cancelAppointment(id) {
  try {
    // Cancel appointment using method DELETE
    await fetch(`${ApiConfig.baseURL}/appointments/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento deletado com sucesso!");
  } catch (error) {
    console.error(error);
    alert(
      "Não foi possivel deletar o agendamento, tente novamente mais tarde!"
    );
  }
}
