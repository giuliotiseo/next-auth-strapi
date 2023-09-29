import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "src/__generated__/graphql.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      config: {
        withHooks: true
      }
    }
  }
};

export default config;
