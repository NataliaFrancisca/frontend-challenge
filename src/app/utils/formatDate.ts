const MONTHS_BR = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export const getDateFormated = (dateAsString: string) => {
    const date = new Date(dateAsString);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day} ${MONTHS_BR[month]}. ${year}`;
}