import { parseAsString, type SingleParserBuilder, type Values } from "nuqs";

export const searchParamsSchema = {
  redirect: parseAsString,
  page: parseAsString.withDefault("1"),
  limit: parseAsString.withDefault("10"),
  search: parseAsString.withDefault(""),
  tab: parseAsString.withDefault("overview"),
  prompt: parseAsString,
};

type ParamsTypes = Values<{
  redirect: SingleParserBuilder<string>;
  page: SingleParserBuilder<number>;
  limit: SingleParserBuilder<number>;
  search: SingleParserBuilder<string>;
  tab: SingleParserBuilder<string>;
  prompt: SingleParserBuilder<string>;
}>;
