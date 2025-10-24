// Google Apps Script code to paste in your Google Sheet
// Go to Extensions > Apps Script, paste this code, and deploy as a web app

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Check if this is the first row (add headers)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name (English)',
        'Name (Arabic)',
        'Gmail',
        'Phone Number',
        'National ID',
        'Codeforces Handle'
      ]);
    }
    
    // Add the new row with timestamp
    sheet.appendRow([
      new Date(),
      data.nameEnglish,
      data.nameArabic,
      data.gmail,
      data.phoneNumber,
      data.nationalId,
      data.codeforcesHandle
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'message': 'GET requests are not supported. Please use POST.'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Test function - you can run this to test if the script has access to your sheet
function testConnection() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Last row: ' + sheet.getLastRow());
  Logger.log('Connection successful!');
}
