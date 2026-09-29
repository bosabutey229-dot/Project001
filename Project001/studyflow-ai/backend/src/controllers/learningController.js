export const healthCheck = (req, res) => {
    res.json({ ok: true, service: 'StudyFlow AI' });
};

export const createStudyPack = async (req, res) => {
    const { title, sourceType, notes } = req.body;

    if (!title || !notes) {
        return res.status(400).json({ message: 'Title and notes are required' });
    }

    const summary = `Summary for ${title}: ${notes.slice(0, 180)}...`;
    const flashcards = [
        { question: 'What is the main topic?', answer: title },
        { question: 'What is the core takeaway?', answer: summary },
    ];

    return res.status(201).json({
        title,
        sourceType: sourceType || 'notes',
        summary,
        flashcards,
        quiz: [
            { question: 'Which statement best reflects the material?', options: ['Key concept summary', 'System shutdown', 'Random guess'], answer: 'Key concept summary' },
        ],
    });
};
