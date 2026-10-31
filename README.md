# HEAL with Faiqa — staging
This repository publishes the approved v2 website to GitHub Pages only. Edit files in docs/. Use main as the staging branch. There is no Netlify config, deployment workflow, production remote or custom domain in this repository.

## First publication
Extract the ZIP, then use GitHub Desktop > File > Add local repository. Select the extracted heal-with-faiqa-staging folder (it includes its own .git directory and first commit). Choose Publish repository, check the account and repository name, and publish. On GitHub Free, use a public repository for Pages. In this repository on GitHub, go to Settings > Pages > Build and deployment > Deploy from a branch > main > /docs > Save. Use Visit site once deployment completes.

## Regular edits
Edit docs/ on GitHub or on your computer. In GitHub Desktop fetch/pull before editing locally; commit and push to origin when ready. Updates appear on the Pages staging site. Booking URLs go in docs/assets/config.js.

## Approved release only
Fetch/pull both repositories and record the approved staging commit. In the Netlify-linked repository, replace the website contents in public/ with the contents of staging docs/, omitting .nojekyll. Review any production-only assets and booking links before replacing them. Keep the production repository's .git directory, netlify.toml and production settings intact. Review additions, modifications and obsolete files in GitHub Desktop. Commit and push to production only when ready for a Netlify deployment. Do not add a second Git remote, auto-sync workflow or Netlify integration to this staging repository.
