function updateUI(info){
    const polarityArea = document.getElementById('polarity');
    polarityArea.innerHTML=`Polarity: ${info.polarity}`;

    const subjectivityArea = document.getElementById('subjectivity');
    subjectivityArea.innerHTML = `Subjectivity: ${info.subjectivity}`;

    const posTable = document.getElementById("positive"); 
    const negTable = document.getElementById("negative");
    const neutTable = document.getElementById('neutral');
    const textList = info['text-snippet']
    
    let p = 0, n=0, neu=0;
    // Clear previous table content before updating
    posTable.innerHTML = `<tr><th>Positive Snippets</th></tr>`;
    negTable.innerHTML = `<tr><th>Negative Snippets</th></tr>`;
    neutTable.innerHTML = `<tr><th>Neutral Snippets</th></tr>`;
    
    // Create DocumentFragments for each table
    const posFragment = document.createDocumentFragment();
    const negFragment = document.createDocumentFragment();
    const neuFragment = document.createDocumentFragment();
    
    for(let i = 0; i< textList.length; i++){
        const currentElement = textList[i];
        if(currentElement.score_tag == 'None') continue; 

        if(p > 7 && n > 7 && neu > 7) break; 

        const row = document.createElement('tr');
        const cell = document.createElement("td");
        cell.textContent = currentElement.text;
        row.appendChild(cell);
        
        if(p < 7 && ['P', 'P+'].includes(currentElement.score_tag)){
            posFragment.appendChild(row);
            p++;
        }

        else if(n < 7 && ['N', 'N+'].includes(currentElement.score_tag)){
            negFragment.appendChild(row);
            n++;
        }
        else if(neu < 7 && currentElement.score_tag === 'NEU'){
            neuFragment.appendChild(row);
            neu++;
        }
    }


    posTable.appendChild(posFragment);
    negTable.appendChild(negFragment);
    neutTable.appendChild(neuFragment);
}



export{ updateUI };