export function randomThrow(computerThrow) {
    if ((computerThrow === 1))
        return 'Ro';
    if ((computerThrow === 2))
        return 'Sham';
    if ((computerThrow === 3))
        return 'Bo';
}


export function userWin(userThrow, computerThrow) {
    if ((userThrow === 'Ro' && computerThrow === 'Bo')
        || (userThrow === 'Sham' && computerThrow === 'Ro')
            || (userThrow === 'Bo' && computerThrow === 'Sham'))
    {
        return 'win';
    }
}

export function userLose(userThrow, computerThrow) {
    if ((userThrow === 'Bo' && computerThrow === 'Ro')
        || (userThrow === 'Ro' && computerThrow === 'Sham')
            || (userThrow === 'Sham' && computerThrow === 'Bo'))
    {
        return 'lose';
    } 
}

export function gameDraw(userThrow, computerThrow) {
    if ((userThrow === computerThrow)) {
        return 'draw';
    }
}