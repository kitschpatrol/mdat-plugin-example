# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

(Node.js support requirements have sometimes increased in minor or patch releases.)

## [3.0.2] - 2026-11-01

### Maintenance

- Refresh development dependencies, including shared-config, mdat, tsdown, and Vitest, and update pnpm to 12.16.1.
- Run the build before linting and automatic fixes.
- Replace the skills prepare hook with pnpm-managed agent skills and approve skills from shared-config and mdat.
- Scope the ESLint 10 peer override to `eslint-plugin-jsx-a11y` 6 and remove obsolete dependency release-age exemptions.
- Move automated dependency updates to a monthly schedule and refresh CI, release, and repository-metadata actions.
- Exclude loopback URLs from link checks and allow runs with no matching links to succeed.

## [3.0.1] - 2026-10-07

### Changed

- **Breaking:** Restrict Node.js support to `^24.16.0 || >=26.3.0`, dropping Node.js 25 and 26.0–26.2.

### Documentation

- Generate explicit Node.js and mdat prerequisites and update installation instructions to use `npm install --save-dev`.

### Maintenance

- Remove the unused `type-fest` dependency and its unused-dependency-check exemption.
- Upgrade development tooling to pnpm 12 and Vitest 5, refresh build permissions and ESLint peer settings, and rename `clean` to `clean-deep`.
- Synchronize development agent skills automatically during project preparation.
- Add a weekly workflow that opens dependency-update pull requests using `ksc-update`.
- Use npm one-time passwords for local publishing and restrict GitHub releases to version tags on the default branch.
- Improve website link checks with `lychee.toml` support, sitemap-link discovery, and pinned sitemap extraction tools.

## [3.0.0] - 2026-07-31

### Changed

- **Breaking:** Raise the Node.js minimum from 22.17.0 to 24.16.0.
- **Breaking:** Require mdat `^3.0.0` instead of `^2.0.0`.

### Documentation

- Update README package and license links.

### Maintenance

- Update the declared `type-fest` dependency to `^5.8.0`.
- Upgrade to TypeScript 6 and shared-config 8, refresh development dependencies and GitHub Actions, and simplify TypeScript configuration.
- Add scheduled link checks for repository Markdown and the configured homepage.
- Add VS Code lint and fix tasks with diagnostics in the Problems panel.

## [2.0.1] - 2026-05-17

### Changed

- **Breaking:** Raise the Node.js minimum from 20.19.0 to 22.17.0.

### Documentation

- Document the issue-first contribution process and the project's linting, formatting, and README generation tools.

### Maintenance

- Update the declared `type-fest` dependency to `^5.6.0`.
- Migrate contributor tooling to pnpm 11 and `allowBuilds` permissions, refresh development dependencies and CI actions, and use `pnpm ci` in CI.
- Make repository cleanup portable across operating systems using `shx`.
- Pass npm credentials directly to the publishing command and support GitHub release tags with or without a `v` prefix.

## [2.0.0] - 2026-04-02

### Changed

- **Breaking:** Require mdat `^2.0.0` instead of `^1.1.0`.

### Documentation

- Update registration examples to use `defineConfig` with top-level rules, clarify placeholder usage, and document peer-version compatibility.

### Maintenance

- Expand CI to Linux, macOS, and Windows, enforce LF line endings, and run tests without watch mode.
- Upgrade to shared-config 7, refresh development typings, and restore default Markdown link validation.

## [1.0.6] - 2026-04-01

### Changed

- Mark the package as side-effect-free for bundlers.

### Maintenance

- Update the declared `type-fest` dependency to `^5.5.0`.
- Refresh development dependencies, pnpm, and VS Code TypeScript SDK settings.
- Add build, lint, and test CI, and update release and metadata workflows with explicit permissions and pinned checkout actions.

## [1.0.5] - 2026-02-23

### Maintenance

- Update the declared `type-fest` dependency to `^5.4.4`.
- Refresh development dependencies and pnpm, upgrade to shared-config 6, and require Node.js 22.21.0 or newer for development.

## [1.0.4] - 2026-01-29

### Maintenance

- Update the declared `type-fest` dependency to `^5.4.2`.
- Refresh development dependencies and pnpm, and migrate CSpell and Prettier configuration files to TypeScript.

## [1.0.3] - 2026-01-19

### Documentation

- Remove leftover template text from the usage documentation.

### Maintenance

- Update the declared `type-fest` dependency to `^5.4.1`.
- Refresh development dependencies and pnpm, and configure explicit TypeScript, ESLint, and Stylelint fixes on save.

## [1.0.2] - 2025-12-08

### Maintenance

- Update the declared `type-fest` dependency to `^5.3.1`.
- Refresh development dependencies and pnpm, and add mdat as an explicit development dependency.
- Correct pnpm tooling hoisting by moving its settings into `pnpm-workspace.yaml`.

## [1.0.1] - 2025-11-05

### Documentation

- Correct the usage instructions to describe expanding the example rule.

### Maintenance

- Update tsdown, shared configuration, and Vitest, and configure builds to retain the `.js` and `.d.ts` filenames declared by package exports.

## [1.0.0] - 2025-11-03

### Added

- Provide a default-exported rules object with an `example` rule that expands its placeholder into a Markdown greeting linking to mdat.
- Distribute an ESM package with TypeScript declarations, requiring Node.js 20.19.0 or newer and mdat `^1.1.0`.

### Documentation

- Document installation, plugin registration, placeholder expansion, and using the repository as a template for custom plugins.

### Maintenance

- Set up TypeScript builds, linting, formatting, expansion snapshot testing, and GitHub release and repository-metadata automation.

[1.0.0]: https://github.com/kitschpatrol/mdat-plugin-example/releases/tag/v1.0.0
[1.0.1]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v1.0.3...v1.0.4
[1.0.5]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v1.0.4...v1.0.5
[1.0.6]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v1.0.5...v1.0.6
[2.0.0]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v1.0.6...v2.0.0
[2.0.1]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v2.0.0...v2.0.1
[3.0.0]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v2.0.1...v3.0.0
[3.0.1]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v3.0.0...v3.0.1
[3.0.2]: https://github.com/kitschpatrol/mdat-plugin-example/compare/v3.0.1...v3.0.2
