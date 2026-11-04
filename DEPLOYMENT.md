# Chromelite Website — Deployment Workflow

**Local computer → GitHub → Vercel (staging) → Live server (www.chromelitedigital.co.ug)**

```
 Your Mac (VS Code)          GitHub                         Vercel (STAGING)                  Live server (PRODUCTION)
 ─────────────────          ──────                         ────────────────                  ────────────────────────
 edit + npm run dev  ──push──▶ develop branch ──auto build──▶ https://chromelite.vercel.app
                                   │                          (hidden from Google, "Staging" label)
                                   │  review OK? open a Pull Request
                                   ▼
                              main branch ──GitHub Action──▶ waits for your approval ──FTPS──▶ public_html/
                                                                                              https://www.chromelitedigital.co.ug
```

- **`develop`** is the staging branch. Every push updates the Vercel staging site.
- **`main`** is the production branch. Merging into `main` builds the site and, **after you approve it**, uploads it to the live server.
- Nothing reaches the live site without passing through GitHub and staging first.

---

## Part 1: One-time setup

### 1.1 Tools on your Mac
1. **Node.js (LTS)**: https://nodejs.org
2. **Visual Studio Code**: https://code.visualstudio.com
3. **GitHub Desktop** (easiest way to push changes without commands): https://desktop.github.com, then sign in with your GitHub account.
   *(Prefer Terminal? Git is already on macOS; run `xcode-select --install` if prompted.)*

### 1.2 Get the repository onto your computer
1. In GitHub Desktop: **File › Clone Repository › Andrew-Kyeyune/chromelite**, and choose a folder such as `~/Sites/chromelite`.
2. Copy all files from this updated package **into** that folder, replacing existing files. Do **not** delete the hidden `.git` folder.
   The update adds `.github/workflows/`, `vercel.json`, `public/.htaccess`, `DEPLOYMENT.md` and staging/production settings.
3. Delete the old `website-ready-to-upload` folder from the repository if it is there; it is no longer needed.

### 1.3 Create the `develop` (staging) branch
In GitHub Desktop:
1. **Branch › New Branch** and name it `develop`, created from `main`.
2. Write a summary such as *"Add staging and production pipeline"*, click **Commit to develop**, then **Publish branch**.

*(Terminal alternative: `git checkout -b develop && git add . && git commit -m "Add pipeline" && git push -u origin develop`)*

### 1.4 Make Vercel follow `develop` (staging)
1. Vercel › project **chromelite** › **Settings › Environments › Production › Branch Tracking** (older dashboards: **Settings › Git › Production Branch**).
2. Change the branch from `main` to **`develop`** and save.
3. Optional: add a friendly staging address under **Settings › Domains**, e.g. `staging.chromelitedigital.co.ug`. Vercel shows the DNS record to add.

Now `https://chromelite.vercel.app` always shows the latest `develop`. Other branches get their own temporary preview links.
The staging site automatically sends `noindex` to search engines and shows a yellow **"Staging preview"** label, so it can never compete with the live site on Google.

### 1.5 The live (production) server
Any standard **cPanel web hosting** plan works, from a Ugandan or international host. The site is plain HTML, so no PHP or database is needed.
From your hosting provider you need:
- **FTP host** (e.g. `ftp.chromelitedigital.co.ug` or the server hostname)
- An **FTP username and password** (in cPanel › *FTP Accounts*, create one whose directory is your home folder)
- The website folder, usually **`public_html/`**

Then point the domain to the server:
- At your domain registrar (for `.co.ug` domains, your registrar or the host managing the domain), set the **A records** for `chromelitedigital.co.ug` and `www` to the **server IP address** your host gives you, or simply use the host's nameservers.
- In cPanel, run **SSL/TLS Status › AutoSSL** to issue the free HTTPS certificate.
- The included `.htaccess` forces `https://www.` (one address for SEO), shows the custom 404 page, and enables compression and caching.

### 1.6 Give GitHub the server details (kept secret)
GitHub › repository **chromelite** › **Settings › Environments › New environment** › name it **`production`**:
1. Tick **Required reviewers**, add yourself, and save. Every live deployment then waits for your click.
2. Under **Environment secrets** add:

| Name | Value |
| --- | --- |
| `FTP_SERVER` | your FTP host, e.g. `ftp.chromelitedigital.co.ug` |
| `FTP_USERNAME` | the FTP username |
| `FTP_PASSWORD` | the FTP password |

3. Optional, under **Environment variables**: `FTP_SERVER_DIR`. Leave it out to use `./public_html/`; set it only if your web folder is different. It must end with `/`.

### 1.7 Protect the `main` branch (recommended)
GitHub › **Settings › Branches › Add branch ruleset** (or *Add rule*) for `main`:
- **Require a pull request before merging**
- **Require status checks to pass**, and select **Build check**

This guarantees that nothing reaches `main`, and therefore the live server, without going through a reviewed pull request that builds successfully.

---

## Part 2: Everyday workflow

1. **Edit on your Mac.** In GitHub Desktop make sure the current branch is **`develop`**. Open the folder in VS Code, run `npm install` once, then `npm run dev`, and preview at http://localhost:3000.
2. **Push to staging.** In GitHub Desktop, write a summary, click **Commit to develop**, then **Push origin**. About a minute later the changes appear on **https://chromelite.vercel.app**. Check them on your laptop and phone.
3. **Promote to production.** In GitHub Desktop click **Branch › Create Pull Request**. On GitHub, create the pull request from `develop` into `main`, wait for the green **Build check**, then click **Merge pull request**.
4. **Approve the live deployment.** GitHub › **Actions › Deploy to production** shows *"Waiting for review"*. Click **Review deployments › production › Approve and deploy**. The site is built and uploaded to `public_html/` in one to three minutes.
5. **Check** https://www.chromelitedigital.co.ug.

**Rolling back:** on GitHub open the merged pull request and click **Revert**, then merge the revert pull request and approve. The previous version is redeployed.

**Manual redeploy:** GitHub › **Actions › Deploy to production › Run workflow** (branch `main`).

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Action fails at "Upload to the live server" with a login error | Re-check the three secrets. Some hosts use `ftp.yourdomain` while others need the server hostname shown in cPanel. |
| Error about TLS/FTPS | Your host may not support FTPS: change `protocol: ftps` to `protocol: ftp` in `.github/workflows/deploy-production.yml`. |
| Files upload to the wrong folder | Set the `FTP_SERVER_DIR` environment variable (e.g. `./` or `./public_html/`), ending with `/`. |
| Live site shows old content | Hard-refresh the browser (Cmd+Shift+R). HTML is never cached by the server rules. |
| Using a VPS with SSH instead of cPanel | Replace the upload step with `SamKirkland/web-deploy@v1` (rsync over SSH) and store an SSH key as a secret; see that action's README. |
| Staging appearing in Google | It should not: the staging site sends `noindex` and blocks crawlers. If an old link was indexed, remove it in Google Search Console › *Removals*. |
