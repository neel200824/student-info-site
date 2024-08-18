document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const trainClass = document.getElementById('trainClass').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const passNo = document.getElementById('passNo').value;
    const endDate = document.getElementById('endDate').value;

    // Create a Word document using a template
    const content = `
        Name: ${name}
        Age: ${age}
        Date of Birth: ${dob}
        Train Class: ${trainClass}
        From: ${from}
        To: ${to}
        Pass No: ${passNo}
        End Date: ${endDate}
    `;

    const blob = new Blob([content], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name}_info.doc`;
    link.click();
});
