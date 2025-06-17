import { z } from "zod";

import i18n from "@/locales/i18n";

export const LoginFormObject = z.object({
  username: z
    .string({
      message: i18n.t("common.form.message.FIELD_IS_REQUIRED", {
        field: i18n.t("login.form.label.USERNAME"),
      }),
    })
    .min(5, {
      message: i18n.t("common.form.message.FIELD_LENGTH_SHOULD_BE_AT_LEAST", {
        field: i18n.t("login.form.label.USERNAME"),
        length: 5,
      }),
    })
    .max(20, {
      message: i18n.t("common.form.message.FIELD_LENGTH_SHOULD_BE_AT_MOST", {
        field: i18n.t("login.form.label.USERNAME"),
        length: 20,
      }),
    }),
  password: z
    .string({
      message: i18n.t("common.form.message.FIELD_IS_REQUIRED", {
        field: i18n.t("login.form.label.PASSWORD"),
      }),
    })
    .min(5, {
      message: i18n.t("common.form.message.FIELD_LENGTH_SHOULD_BE_AT_LEAST", {
        field: i18n.t("login.form.label.PASSWORD"),
        length: 5,
      }),
    })
    .max(20, {
      message: i18n.t("common.form.message.FIELD_LENGTH_SHOULD_BE_AT_MOST", {
        field: i18n.t("login.form.label.PASSWORD"),
        length: 20,
      }),
    }),
});

export type LoginFormSchema = z.infer<typeof LoginFormObject>;
