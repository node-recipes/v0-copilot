// Save this script as 'updateDocs.mjs'

import fs from "fs";
import fsExtra from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  // Pull the latest changes for the 'ui' submodule
  console.log("Updating submodule ui/ to the latest version...");
  execSync("git submodule update --remote ui/", { stdio: "inherit" });

  // Remove the 'docs/' folder if it exists
  const docsPath = path.join(__dirname, "docs");
  if (fs.existsSync(docsPath)) {
    console.log("Removing existing docs/ folder...");
    fs.rmSync(docsPath, { recursive: true, force: true });
  }

  // Copy 'ui/apps/www/content/docs/components/' to 'docs/'
  console.log("Copying ui/apps/www/content/docs/components/ to docs/...");
  const srcPath = path.join(
    __dirname,
    "ui",
    "apps",
    "www",
    "content",
    "docs",
    "components"
  );
  if (!fs.existsSync(srcPath)) {
    throw new Error(`Source path does not exist: ${srcPath}`);
  }
  fsExtra.copySync(srcPath, docsPath);

  console.log("Operation completed successfully.");
} catch (error) {
  console.error("An error occurred:", error.message);
  process.exit(1);
}
