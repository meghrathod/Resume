// Ensure fetch is available (Node.js 18+ has global fetch, otherwise use node-fetch)
let fetchFn;
try {
  fetchFn = fetch;
} catch (e) {
  fetchFn = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
}


const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to proxy the latest resume PDF from GitHub Releases
app.get('/resume.pdf', async (req, res) => {
  const pdfUrl = 'https://github.com/meghrathod/Resume/releases/download/latest/Resume_Megh_Rathod.pdf';
  try {
    const response = await fetchFn(pdfUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ResumeProxy/1.0)' }
    });
    console.log('Fetch response status:', response.status);
    if (!response.ok) {
      console.error('Failed to fetch PDF:', response.status, response.statusText);
      return res.status(502).send('Failed to fetch PDF');
    }
    res.setHeader('Content-Type', 'application/pdf');
    // Forward content-length and accept-ranges if available
    if (response.headers.get('content-length')) {
      res.setHeader('Content-Length', response.headers.get('content-length'));
    }
    if (response.headers.get('accept-ranges')) {
      res.setHeader('Accept-Ranges', response.headers.get('accept-ranges'));
    }
    if (response.body && typeof response.body.pipe === 'function') {
      response.body.pipe(res);
    } else {
      // For native fetch, use arrayBuffer and convert to Buffer
      const arrayBuffer = await response.arrayBuffer();
      res.end(Buffer.from(arrayBuffer));
    }
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).send('Error fetching PDF');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
