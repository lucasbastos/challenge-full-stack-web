export interface Student {
    id: string;
    name: string;
    email: string;
    ra: number;
    cpf: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface StudentInput {
    name: string;
    email: string;
    ra: number;
    cpf: string;
}
