/**
 * SmartGrow Infotech — job application receiver.
 *
 * Paste this into a Google Apps Script bound to your Google Sheet
 * (Extensions → Apps Script). Full setup: docs/CAREERS_FORM_SETUP.md
 *
 * What it does on every submission from the website form:
 *   1. Saves the resume file into a Drive folder ("SmartGrow Resumes")
 *   2. Appends one row to the "Applications" sheet with all details
 *      and a link to the resume
 */

var SHEET_NAME = "Applications";
var FOLDER_NAME = "SmartGrow Resumes";

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);

    // 1. Save the resume to Drive
    var resumeLink = "";
    if (d.resumeBase64) {
      var folder = getOrCreateFolder_(FOLDER_NAME);
      var blob = Utilities.newBlob(
        Utilities.base64Decode(d.resumeBase64),
        d.resumeType || "application/octet-stream",
        (d.name || "applicant") + " — " + (d.resumeName || "resume.pdf")
      );
      resumeLink = folder.createFile(blob).getUrl();
    }

    // 2. Append the row to the sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow([
        "Submitted at", "Role", "Name", "Email", "Phone",
        "Experience", "Portfolio", "Note", "Resume",
      ]);
      sh.setFrozenRows(1);
    }
    sh.appendRow([
      new Date(), d.role || "", d.name || "", d.email || "", d.phone || "",
      d.experience || "", d.portfolio || "", d.note || "", resumeLink,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateFolder_(name) {
  var it = DriveApp.getFoldersByName(name);
  return it.hasNext() ? it.next() : DriveApp.createFolder(name);
}
