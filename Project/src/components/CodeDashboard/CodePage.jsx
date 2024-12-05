import React, { useState } from 'react'; // Import React and useState for state management

const CodePage = () => {
  // State to manage the list of files and their details
  const [files, setFiles] = useState([
    // Initial list of details like name, status, upload date, type, and size
    { name: 'file1.js', status: 'Success', uploadDate: '2024-12-01', fileType: '.js', size: '15 KB' },
    { name: 'file2.py', status: 'Success', uploadDate: '2024-11-28', fileType: '.py', size: '10 KB' },
    { name: 'file3.java', status: 'Success', uploadDate: '2024-11-25', fileType: '.java', size: '20 KB' },
    { name: 'file4.rb', status: 'Success', uploadDate: '2024-11-22', fileType: '.rb', size: '25 KB' }
  ]);

  // State to temporarily store a newly selected file
  const [newFile, setNewFile] = useState(null);

  // Function to handle file selection (when a user chooses a file)
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      setNewFile(file); // Save the selected file in the state
    }
  };

  // Function to upload the selected file and add its details to the list
  const handleFileUpload = () => {
    if (newFile) {
      const newFileData = {
        // Add details of the new file, including name, current date, type, and size
        name: newFile.name,
        status: 'Success', // Mark the upload status as "Success"
        uploadDate: new Date().toLocaleDateString(), // Current date in readable format
        fileType: newFile.name.split('.').pop(), // Extract file extension
        size: `${(newFile.size / 1024).toFixed(2)} KB` // Convert file size to KB and format it
      };

      setFiles([...files, newFileData]); // Add the new file to the existing list
      setNewFile(null); // Reset the selected file to prepare for the next upload
    }
  };

  return (
    <div className="content">
      {/* Display a welcome message */}
      <h3 className="text-dark mb-4">Welcome Shivani Gore</h3>
      <hr />

      {/* Display the table of uploaded files */}
      <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        <table className="table table-striped table-bordered table-hover table-sm shadow-lg">
          <thead className="thead-dark">
            <tr>
              {/* Table headers for file details */}
              <th className="p-3">File Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Upload Date</th>
              <th className="p-3">File Type</th>
              <th className="p-3">Size</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through the files array and display each file's details */}
            {files.map((file, index) => (
              <tr key={index}>
                <td className="p-3">{file.name}</td>
                <td className="p-3">
                  {/* Display a badge for the status (e.g., Success) */}
                  <span className={`badge ${file.status === 'Success' ? 'bg-success' : 'bg-danger'}`}>
                    {file.status}
                  </span>
                </td>
                <td className="p-3">{file.uploadDate}</td>
                <td className="p-3">{file.fileType}</td>
                <td className="p-3">{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section for uploading a new file */}
      <div className="mt-4">
        <p className="mb-2">Want to add more files?</p>
        {/* Button to open the file selection dialog */}
        <button
          className="btn btn-primary px-4 py-2"
          onClick={() => document.getElementById('file-input').click()} // Trigger file input click
        >
          <i className="bi bi-plus-circle"></i> Add File
        </button>

        {/* Hidden file input to select a file */}
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }} // Hide the file input element
          onChange={handleFileChange} // Handle file selection
        />
        {newFile && (
          // Show an upload button only when a file is selected
          <button className="btn btn-success px-4 py-2 ml-2" onClick={handleFileUpload}>
            <i className="bi bi-cloud-upload"></i> Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default CodePage;
