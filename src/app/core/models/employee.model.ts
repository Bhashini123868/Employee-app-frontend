export interface Employee{
    id: number;
    name: string;
    email: string;
    department: Department;
    createdAt: string;
    updatedAt: string;

}

export enum Department{
    HR = 'HR',
    IT = 'IT',
    FINANCE = 'Finance',
    OPERATIONS = 'Operations'
}

export interface ApiError{
    status: number;
    message: string;
    errors: Record<string, string>;
    timestamp: string;
}