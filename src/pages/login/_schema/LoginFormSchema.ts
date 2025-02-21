import { z } from "zod";

export const LoginFormObject = z.object({
  username: z.string().min(5).max(20),
  password: z.string().min(5).max(20),
});

type LoginFormSchema = z.infer<typeof LoginFormObject>;

export default LoginFormSchema;
