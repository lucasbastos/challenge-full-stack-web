import { Student } from "src/models/student.model";
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export class StudentService {
    public async get(id?: string): Promise<Student> {
            return await prisma.students.findUnique({
                where: {
                    id: id
                }
            });
    }
    public async getAll(): Promise<Student[]> {
        return prisma.students.findMany();
    }
}