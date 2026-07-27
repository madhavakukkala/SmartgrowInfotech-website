# Careers form → Google Sheet setup

The application form on `/about/career` posts each submission (details + resume) to a Google Apps Script, which writes a row into your Google Sheet and saves the resume to your Google Drive. One-time setup, about 5 minutes, completely free.

## Steps

1. **Create the spreadsheet.** Go to [sheets.new](https://sheets.new), name it something like `SmartGrow Job Applications`.

2. **Open Apps Script.** In that sheet: **Extensions → Apps Script**. Delete any code in the editor.

3. **Paste the script.** Copy the entire contents of [`docs/careers-apps-script.gs`](./careers-apps-script.gs) into the editor and save (Ctrl+S).

4. **Deploy it.** Click **Deploy → New deployment**, then:
   - Gear icon → select **Web app**
   - Description: `careers form`
   - Execute as: **Me**
   - Who has access: **Anyone** (this only allows submissions; nobody can read your sheet)
   - Click **Deploy**, approve the permissions when Google asks (it will warn the app is unverified: click Advanced → Go to project). This is your own script running on your own account.

5. **Copy the Web app URL.** It looks like `https://script.google.com/macros/s/AKfycb.../exec`.

6. **Connect the site.** Open `lib/site.ts` and paste the URL:
   ```ts
   export const APPLY_ENDPOINT = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
   Commit and push. Done.

## What you get per application

A new row in the **Applications** tab: timestamp, role, name, email, phone, experience, portfolio link, note, and a **Drive link to the resume** (stored in a folder called `SmartGrow Resumes`).

## Notes

- Until `APPLY_ENDPOINT` is filled in, the career page shows an email-your-resume fallback instead of the form, so nothing breaks meanwhile.
- To get notified of new applications: in the Sheet, **Tools → Notification settings → Notify me when a user submits / any changes are made → Email right away**.
- To edit the roles themselves (add, remove, reword), edit `lib/jobs.ts`.
- If you ever redeploy the script after editing it, use **Deploy → Manage deployments → edit → New version**, so the URL stays the same.
