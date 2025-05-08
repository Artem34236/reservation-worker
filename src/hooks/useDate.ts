
export const useDate = (days: number) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long' };
    const formatter = new Intl.DateTimeFormat('ru-RU', options);

    return Array.from({ length: days }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return {
            html: formatter.format(d),
            date: d.getDate(),
            month: d.getMonth(),
            year: d.getFullYear(),
        }
    });
};

