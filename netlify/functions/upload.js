export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const { path, content, sha } = JSON.parse(event.body);

    const response = await fetch(
      `https://api.github.com/repos/Berwin-27/performance-gallery/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Upload ${path}`,
          content,
          ...(sha && { sha })
        })
      }
    );

    const data = await response.json();
    return {
      statusCode: response.ok ? 200 : 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
