import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(8).max(20),
  gender: z.enum(["MALE", "FEMALE"]),
  birthDate: z.string().refine(
    (date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    },
    { message: "Invalid date format" },
  ),
  address: z.string().min(1).max(255),
  schoolName: z.string().min(1).max(255),
  graduationYear: z.coerce.number().int().gte(1900),
  schoolAddress: z.string().min(1).max(255),
  interest: z.string().min(1).max(255),
  heardFrom: z.string().min(1).max(255),
  notes: z.string().max(1000).optional(),
});

export const registrationPayloadSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(8).max(20),
  gender: z.enum(["MALE", "FEMALE"]),
  birthDate: z.string().refine(
    (date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    },
    { message: "Invalid date format" },
  ),
  address: z.string().min(1).max(255),
  schoolName: z.string().min(1).max(255),
  graduationYear: z.coerce.number().int().gte(1900),
  schoolAddress: z.string().min(1).max(255),
  interest: z.string().min(1).max(255),
  heardFrom: z.string().min(1).max(255),
  notes: z.string().max(1000).nullish(),
});

export const homescreenImageSchema = z.object({
  id: z.string().uuid(),
  imageUrl: z.string().url(),
  createdAt: z.string().refine(
    (date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    },
    { message: "Invalid date format" },
  ),
  updatedAt: z.string().refine(
    (date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    },
    { message: "Invalid date format" },
  ),
});

export const uploadPhotosPayload = z.object({
  files: z.array(z.instanceof(File)).refine((filesArray) => filesArray.every((file) => file.size < 20 * 1024 * 1024), {
    message: "All files must be less than 20 MB",
  }),
  folder: z.string().min(1).max(255),
});