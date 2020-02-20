const getMonths = job => {
    if (job.months) {
        return job.months;
    }

    const [month, year] = job.since.split('/');
    const today = new Date();
    return ((today.getFullYear() - year) * 12) + ((today.getMonth() + 1) - month);
};

const getWage = (job) => {
    return job.wage ||
        job.salary / 53 / 40;
};

export const processJobData = (jobs) => {
    const totalMonths = jobs.reduce((sum, j) => sum + getMonths(j), 0);
    const maxWage = jobs.reduce((highest, j) => {
        const curr = getWage(j);
        return curr > highest ? curr : highest;
    }, 0);

    //  need to recalculate jobs to get percentages and increases listed
    let lastWage = 0;

    return jobs.map(job => {
        const wage = getWage(job).toFixed(2);
        const wageDiff = wage - lastWage;
        lastWage = wage;
        return {
            ...job,
            percent: getMonths(job) / totalMonths * 100,
            wageDifference: {
                dollars: (Math.round(wageDiff * 100) / 100).toFixed(2),
                percent: Math.round(wageDiff / lastWage * 100),
                absolutePercent: (wage / maxWage * 100).toFixed(2),
            },
            wage
        };
    });
};

export default async () => {
    try {
        const response = await fetch('jobs.json');
        const jobs = await response.json();
        return processJobData(jobs);
    } catch (networkError) {
        console.error('NETWORK ERR:', networkError);
        return [];
    }
};
