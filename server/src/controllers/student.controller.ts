import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Put,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";

import { Student, StudentInput } from "../models/student.model";
import { StudentService } from "../services/student.service";

const studentService = new StudentService();

@Route("api/v1/students")
export class StudentController extends Controller {

    @Get("{id}")
    public async get(@Path() id: string): Promise<Student| string>  {
        try {
            const student = await studentService.get(id);
            if (student) {
                return student;
            }
            this.setStatus(404);
            const err = `Student with id ${id} not found`
            return err;
        }
        catch (error) {
            throw error;
        }
    }

    @Get("/")
    public async getAll(): Promise<Student[]>  {
        try {
            const students = await studentService.getAll();
            return students;
        }
        catch (error) {
            throw error;
        }
    }

    @Post("{id}")
    @SuccessResponse("201", "Created")
    public async create(@Body() student: Student): Promise<Student | string>  {
        try {
            const newStudent = await studentService.create(student);
            this.setStatus(201);
            return newStudent;
        }
        catch (error) {
            throw error;
        }
    }

    @Put("{id}")
    @SuccessResponse("200", "OK")
    public async update(@Path() id: string, @Body() student: Student): Promise<Student | string>  {
        try {
            const updatedStudent = await studentService.update(id, student);
            return updatedStudent;
        }
        catch (error) {
            throw error;
        }
    }
}