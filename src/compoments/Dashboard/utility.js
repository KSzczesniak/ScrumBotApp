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

export const defaultTask = {
    assignee: '',
    description: '',
    endDate: '',
    estimation: '1',
    header: '',
    startDate: '',
    status: 'To Do',
    type: 'task',
    unit: "time"
};

export const taskSummary = {
    sum: 0,
    stages: {
        "To Do": 0,
        "In Progress": 0,
        "In Review": 0,
        "Resolved": 0
    }
}