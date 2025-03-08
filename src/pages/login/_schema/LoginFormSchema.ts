import { z } from "zod";

export const LoginFormObject = z.object({
  username: z
    .string()
    .min(5, { message: "Username length should be at least 5." })
    .max(20, { message: "Username length should be at most 20." }),
  password: z
    .string()
    .min(5, { message: "Password length should be at least 5." })
    .max(20, { message: "Password length should be at most 20." }),
});

type LoginFormSchema = z.infer<typeof LoginFormObject>;

export default LoginFormSchema;
