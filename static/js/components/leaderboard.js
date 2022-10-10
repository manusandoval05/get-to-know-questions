export const createLeaderBoard = (playerList, $container) => {
    const $table = document.createElement("table");
    const $tableBody = document.createElement("tbody");
    let playerScoreboard = {};
    let position = 1;

    $table.classList.add("table");
    $table.innerHTML = `
        <thead>
            <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Player</th>
                <th><abbr title="Pts">Points</abbr></th>
            </tr>
        </thead>
    `;
    console.log(playerList);
    playerList.forEach(playerName => { 
        const $row = document.createElement("tr");
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