import { z } from "zod";

export const JoinFormObject = z
  .object({
    username: z
      .string()
      .min(5, { message: "Username length should be at least 5." })
      .max(20, { message: "Username length should be at most 20." }),
    password: z
      .string()
      .min(5, { message: "Password length should be at least 5." })
      .max(20, { message: "Password length should be at most 20." }),
    passwordConfirm: z
      .string()
      .min(5, { message: "Password length should be at least 5." })
      .max(20, { message: "Password length should be at most 20." }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

type JoinFormSchema = z.infer<typeof JoinFormObject>;

export default JoinFormSchema;
