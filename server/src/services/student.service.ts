import { Student, StudentInput } from "src/models/student.model";
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

    public async create(student: Student): Promise<Student | string> {
        try {
            const newStudent = await prisma.students.create({
                data: student
            })
            return newStudent
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                  return 'There is a unique constraint violation';
                }
              }
              throw error;
        }
    }

    public async update(id: string, student: Student): Promise<Student | string> {
        try {
            const updatedStudent = await prisma.students.update({
                where: {
                    id: id
                },
                data: student
            })
            return updatedStudent
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                  return 'There is a unique constraint violation';
                }
              }
              throw error;
        }
    }
}