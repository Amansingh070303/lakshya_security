
# Deployment Guide: Lakshya Security

This guide will help you initialize a Git repository, push your code to GitHub, and host your site for free using GitHub Pages.

> [!IMPORTANT]
> **Prerequisite:** Ensure Git is installed and available in your terminal.
> If running `git --version` returns an error, download and install Git from [git-scm.com](https://git-scm.com/downloads).
> After installing, you may need to restart your terminal or computer.

## 1. Initialize Git Repository

Open your terminal in the project folder (`c:\Users\Aman B\Desktop\Lakshya security`) and run:

```bash
# Initialize a new git repo
git init

# Add all files to staging (respecting .gitignore)
git add .

# Commit the changes
git commit -m "Initial commit"
```

## 2. Create GitHub Repository

1.  Log in to [GitHub](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it `lakshya_security`.
4.  Leave it **Public**.
5.  **Do not** check "Initialize with README", .gitignore, or license (we already have files).
6.  Click **Create repository**.

## 3. Push to GitHub

Copy the commands shown on GitHub under "…or push an existing repository from the command line", which will look like this:

```bash
# Replace 'YOUR_USERNAME' with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/lakshya_security.git

git branch -M main

git push -u origin main
```

## 4. Free Hosting with GitHub Pages

Once your code is on GitHub:

1.  Go to your repository **Settings**.
2.  Click **Pages** in the left sidebar (under "Code and automation").
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select `main` and `/ (root)`.
5.  Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/lakshya_security/` in a few minutes!

> [!TIP]
> **CSS Handling:** We have ensured `dist/css/output.css` is included in the commit so your styles will work immediately on GitHub Pages without needing a build step on the server.
