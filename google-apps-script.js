// Google Apps Script code to paste in your Google Sheet
// Go to Extensions > Apps Script, paste this code, and deploy as a web app

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data (URL-encoded or JSON)
    var data;
    if (e.parameter && e.parameter.data) {
      // URL-encoded data
      data = JSON.parse(e.parameter.data);
    } else if (e.postData && e.postData.contents) {
      // JSON data
      data = JSON.parse(e.postData.contents);
    } else {
      data = {};
    }
    
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
    
    // Return success response with CORS headers
    var output = ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data added successfully'
    }));
    output.setMimeType(ContentService.MimeType.JSON);
    return output;
    
  } catch (error) {
    // Return error response with CORS headers
    var output = ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    }));
    output.setMimeType(ContentService.MimeType.JSON);
    return output;
  }
}

function doGet(e) {
  var output = ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'message': 'GET requests are not supported. Please use POST.'
  }));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

function doOptions(e) {
  var output = ContentService.createTextOutput('');
  output.setMimeType(ContentService.MimeType.TEXT);
  return output;
}

// Test function - you can run this to test if the script has access to your sheet
function testConnection() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Last row: ' + sheet.getLastRow());
  Logger.log('Connection successful!');
}
