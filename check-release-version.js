#!/usr/bin/env node
const pkg = require("./package.json");
const pkgVersion = pkg.version;

const githubReleaseTagName = process.env["GITHUB_REF"];
if (typeof githubReleaseTagName !== "string" || !githubReleaseTagName) {
  throw new Error("Cannot locate Github Release Tag Name from env variable!");
}
const versionTag = githubReleaseTagName.split("/").pop();
if (typeof versionTag !== "string" || !versionTag) {
  throw new Error(
    `Invalid Github Release Tag Name env var value: ${githubReleaseTagName}!`
  );
}
const SEMVER_REGEX =
  /^v((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/;
const matchResult = versionTag.match(SEMVER_REGEX);
if (!matchResult) {
  console.log(githubReleaseTagName);
  console.log(matchResult);
  throw new Error(
    `The inputted Github Release Tag Name "${versionTag}" should match format letter 'v' + semver string. e.g. v1.0.0-alpha.1`
  );
}
const versionStr = matchResult[1];

console.log(
  `Checking if inputted Github Release Tag Name version ${versionStr} match the package version...`
);

if (pkgVersion != versionStr) {
  console.error(
    `Inputted Github Release Tag Name Version ${newVersion} is different from package version ${pkgVersion} in "package.json".`
  );
  console.error(`Please update "package.json" and try again.`);
  process.exit(-1);
}

console.log(`Passed release version check.`);
