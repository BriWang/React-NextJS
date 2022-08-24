// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
    if (req.method === 'POST') {
        // post data API
        // ...
        // ...
        res.status(201).json({ message: 'Meetup inserted!' });
    }
}


export default handler;