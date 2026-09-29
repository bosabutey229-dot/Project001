export const generateStudyContent = async ({ title, notes }) => {
    return {
        title,
        summary: `AI summary for ${title}: ${notes.slice(0, 200)}${notes.length > 200 ? '...' : ''}`,
        flashcards: [
            { question: 'What is the major theme?', answer: title },
            { question: 'Why is this concept important?', answer: 'It helps structure learning and retain the core idea.' },
        ],
        quiz: [
            {
                question: 'What best describes the study material?',
                options: ['A summary of the main idea', 'A random internet list', 'A blank note'],
                answer: 'A summary of the main idea',
            },
        ],
    };
};
