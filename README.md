
# 🔁 WordPress Auto Refresher

**A dev helper script that watches local WordPress theme/plugin files and automatically reloads your Chrome browser tabs when changes are detected.**  
Perfect for use with WinSCP, VS Code, and Chrome in debug mode — no manual refreshing needed.

---

## 🔧 How does it work?

### 🧰 Initial Requirements

First, install **NVM (Node Version Manager)**:  
👉 https://github.com/coreybutler/nvm-windows

After installing, check if it's working:

```bash
nvm -v
```

Then install Node.js:

```bash
nvm install 20
nvm use 20
```

From now on, you're using Node.js version 20.  
Check your npm version:

```bash
npm -v
```

Now go into this directory and run:

```bash
npm install
```

---

### 🚫 Additionally: for convenience, never use FileZilla again

Instead, install **WinSCP**, which doesn’t show those annoying upload confirmation popups.

---

### ⚙️ Main settings

When working on a specific URL — you **must change it** inside the `.env` file:

```env
DOMAIN=yourdomain.pl
```

---

### ❗ IMPORTANT

This script uses **puppeteer-core**, which controls the browser.  
That’s why it’s crucial to launch Chrome in **debug mode**, opening port `9222`, which allows tab refresh.

This port only opens **when starting the browser with that flag** —  
so if you already have Chrome windows open, you must close them and launch Chrome in debug mode like this:

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
```

---

### 💡 Or use the prepared `.bat` script

Just click on the prepared script file:

```bash
start-dev.bat
```

But **remember** to edit this part:

```bat
--new-window "START URL OF YOUR WP PAGE"
```

---

### 🧪 Next steps...

You’ll likely need to log into your **WordPress admin panel**,  
and then go to the frontend view of the page you're currently working on.

Now — every time you save files locally in the folder,  
you’ll see logs inside the running script like:

```bash
✅ Reloaded: https://XXX.pl/homepage/#wordpress-refresher
```