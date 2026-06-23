export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
}

export interface User {
    username: string;
    password: string;
    totalFocusTime: number;
    tasks: Task[];
    totalSessions: number;
}

export interface TimerSettings {
    focusDuration: number;
    breakDuration: number;
}