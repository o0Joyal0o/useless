interface CalendarDay {
    date: number;
    selected: boolean;
}

interface Calendar {
    days: CalendarDay[];
    selectDay(date: number): void;
}

type SelectionCallback = (selectedDate: number) => void;