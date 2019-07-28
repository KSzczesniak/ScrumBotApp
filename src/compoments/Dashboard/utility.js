export const setColorForType = type => {
    let color = '';
    if (type === 'task') {
        color = 'primary'
    } else if (type === 'story') {
        color = 'success'
    } else if (type === 'epic') {
        color = 'warning'
    }
    return color;
};