export const createLeaderBoard = (playerList, $container) => {
    const $table = document.createElement("table");
    const $tableBody = document.createElement("tbody");
    let playerScoreboard = {};
    let position = 1;

    $table.classList.add("table", "is-fullwidth");
    $table.innerHTML = `
        <thead>
            <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Points</th>
            </tr>
        </thead>
    `;
    playerList.forEach(playerName => { 
        const $row = document.createElement("tr");
        position === 1 ? $row.classList.add("is-selected") : null; 
        $row.innerHTML = `
            <th>${position}</th>
            <td>${playerName}</td>
            <td>${0}</td>
        `;
        playerScoreboard[position] = {name: playerName, score: 0, row: $row}; 
        $tableBody.append($row);
        position++;
    }); 

    $table.append($tableBody);
    $container.append($table);

    return playerScoreboard;
};