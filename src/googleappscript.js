/**
 * MIWAY Contact Form → Google Sheets
 * FINAL STABLE VERSION
 */

const SHEET_ID =
  "1F8038ggv0c3uh0Cv-S-Off5UsdRvV3kd3ANyjGLCt8U";

const SHEET_NAME = "MIWAY Inquiries";

const ADMIN_EMAIL = "samdev0418@gmail.com";

/* ───────────────────────────────────────────── */

function doPost(e) {
  try {
    Logger.log("===== NEW SUBMISSION =====");

    /**
     * SAFELY PARSE DATA
     */
    let data = {};

    try {
      if (e.postData && e.postData.contents) {
        Logger.log("RAW:");
        Logger.log(e.postData.contents);

        data = JSON.parse(
          e.postData.contents
        );
      }
    } catch (parseError) {
      Logger.log(
        "JSON PARSE FAILED:"
      );

      Logger.log(
        parseError.toString()
      );

      data = e.parameter || {};
    }

    Logger.log("PARSED DATA:");
    Logger.log(JSON.stringify(data));

    /**
     * VALIDATION
     */
    if (!data.name && !data.email) {
      throw new Error(
        "No valid form data received"
      );
    }

    /**
     * OPEN SPREADSHEET
     */
    const spreadsheet =
      SpreadsheetApp.openById(
        SHEET_ID
      );

    let sheet =
      spreadsheet.getSheetByName(
        SHEET_NAME
      );

    /**
     * CREATE SHEET IF NOT EXISTS
     */
    if (!sheet) {
      sheet =
        spreadsheet.insertSheet(
          SHEET_NAME
        );

      sheet.appendRow([
        "Timestamp",
        "Name",
        "Institution",
        "Email",
        "Phone",
        "Message",
      ]);
    }

    /**
     * INSERT ROW
     */
    sheet.appendRow([
      new Date(),
      String(data.name || ""),
      String(data.school || ""),
      String(data.email || ""),
      String(data.phone || ""),
      String(data.message || ""),
    ]);

    SpreadsheetApp.flush();

    Logger.log(
      "ROW INSERTED SUCCESSFULLY"
    );

    /**
     * EMAIL NOTIFICATION
     */
    try {
      GmailApp.sendEmail(
        ADMIN_EMAIL,
        "New MIWAY Enquiry",
        `
New enquiry received

Name: ${data.name}
Institution: ${data.school}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
        `
      );
    } catch (emailErr) {
      Logger.log(
        emailErr.toString()
      );
    }

    /**
     * SUCCESS RESPONSE
     */
    return ContentService
      .createTextOutput(
        JSON.stringify({
          status: "Success",
        })
      )
      .setMimeType(
        ContentService.MimeType.JSON
      );
  } catch (err) {
    Logger.log("ERROR:");
    Logger.log(err.toString());

    return ContentService
      .createTextOutput(
        JSON.stringify({
          status: "Error",
          message: err.toString(),
        })
      )
      .setMimeType(
        ContentService.MimeType.JSON
      );
  }
}

/**
 * HEALTH CHECK
 */
function doGet() {
  return ContentService
    .createTextOutput(
      JSON.stringify({
        status: "Live",
      })
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );
}