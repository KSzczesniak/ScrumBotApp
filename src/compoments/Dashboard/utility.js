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

export const createDefaultTask = () => {
    return {
        assignee: '',
        description: '',
        endDate: '',
        estimation: 0,
        header: '',
        startDate: '',
        status: 'To Do',
        type: 'task',
        unit: "time"
    }
};