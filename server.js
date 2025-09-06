const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Route to serve the main page
app.get(['/', '/on-campus'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to proxy the latest resume PDF from GitHub Releases
app.get('/resume.pdf', async (req, res) => {
  const pdfUrl = 'https://github.com/meghrathod/resume/releases/latest/download/Resume.pdf';
  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      return res.status(502).send('Failed to fetch PDF');
    }
    res.setHeader('Content-Type', 'application/pdf');
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send('Error fetching PDF');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
