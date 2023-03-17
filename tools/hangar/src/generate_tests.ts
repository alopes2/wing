import { mkdirpSync, readdirSync, rmSync, writeFileSync } from "fs-extra";
import { validTestDir } from "./paths";
import { join, extname } from "path";

const generatedTestDir = join(__dirname, "test_corpus", "valid");
rmSync(generatedTestDir, { recursive: true, force: true });
mkdirpSync(generatedTestDir);
for (const fileInfo of readdirSync(validTestDir, { withFileTypes: true })) {
  if (!fileInfo.isFile() || extname(fileInfo.name) !== ".w") {
    continue;
  }

  const filename = fileInfo.name;
  const skipText = filename.endsWith("skip.w") ? ".skip" : "";

  const fileContents = `\
// This file is generated by tools/hangar/src/generate_tests.ts

import { test } from "vitest";
import { compileTest, testTest } from "../../generated_test_targets";

test${skipText}("wing compile -t tf-aws", async ({ expect }) => {
  await compileTest(expect, "${filename}");
});

test${skipText}("wing test", async ({ expect }) => {
  await testTest(expect, "${filename}");
});`;

  writeFileSync(join(generatedTestDir, `${filename}.test.ts`), fileContents);
}