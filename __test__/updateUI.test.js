import { updateUI } from "../src/client/js/UIFormatter";

describe('updateUI', () => {
    beforeEach(() => {
        //Create simple DOM for testing
        document.body.innerHTML = `
        <div id="polarity"></div>
        <div id="subjectivity"></div>
        <table id="positive"></table>
        <table id="negative"></table>
        <table id="neutral"></table>
        `;
    });

    //start testing
    test('should update the UI with the given info', () => {
        //dummy info for the testing
        const info = {
            polarity: 'P',
            subjectivity: 'Subjective',
            'text-snippet': [
                { text: 'This is good', score_tag: 'P' },
                { text: 'This is bad', score_tag: 'N' },
                { text: 'This is neutral', score_tag: 'NEU' },
            ]
        };
        //call the function 
        updateUI(info);

        // Check the polarity and subjectivity areas
        expect(document.getElementById('polarity').innerHTML).toBe('Polarity: P');
        expect(document.getElementById('subjectivity').innerHTML).toBe('Subjectivity: Subjective');

        // Check if the tables are updated correctly
        const posTable = document.getElementById('positive');
        const negTable = document.getElementById('negative');
        const neutTable = document.getElementById('neutral');

        // Check positive snippets table
        expect(posTable.innerHTML).toContain('<td>This is good</td>');
    
        // Check negative snippets table
        expect(negTable.innerHTML).toContain('<td>This is bad</td>');
    
        // Check neutral snippets table
        expect(neutTable.innerHTML).toContain('<td>This is neutral</td>');
    });
});
